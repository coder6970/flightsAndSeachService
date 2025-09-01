const {AirportService} = require('../services/index');
const airportService = new AirportService();

  
const createAirport = async (req, res) => {
    try {
        const airport = await airportService.createCity(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created a airport",
            error: {}
        })
    }
    catch (error) {
        console.log("THE ERROR IS ",error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airport controller",
            error: error
        })
    }
}


const destroyAirport = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the airport",
            error: {}
        })
    }
    catch (error) {
         console.log(error);
         
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airport controller",
            error: error
        })
    }
}

const updateAirport = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the airport",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airport controller",
            error: error
        })
    }
}

const fetchAirport = async (req, res) => {
    try {
        const response = await airportService.fetchAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the airport",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airport controller",
            error: error
        })
    }
}

const fetchAllAirports = async (req, res) => {
    try {
        const response = await airportService.fetchAllAirports(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all the airports",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airport controller",
            error: error
        })
    }
}   

module.exports = {
    createAirport,
    destroyAirport,
    updateAirport,
    fetchAirport,
    fetchAllAirports
}