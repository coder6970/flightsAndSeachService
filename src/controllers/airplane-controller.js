const  {AirplaneService} = require('../services/index');
const airplaneService = new AirplaneService();

  
const createAirplane = async (req, res) => {
    try {
        const airpane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airpane,
            success: true,
            message: "Successfully created a airplane",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airplane controller",
            error: error
        })
    }
}


const destroyAirplane = async (req, res) => {
    try {
        const response = await airplaneService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the airplane",
            error: {}
        })
    }
    catch (error) {
         console.log(error);
         
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airplane controller",
            error: error
        })
    }
}

const updateAirplane = async (req, res) => {
    try {
        const response = await airplaneService.update(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the airplane",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airplane controller",
            error: error
        })
    }
}

const fetchAirplane = async (req, res) => {
    try {
        const response = await airplaneService.fetch(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the airplane",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airplane controller",
            error: error
        })
    }
}

const fetchAllAirplanes = async (req, res) => {
    try {
        const response = await airplaneService.fetchAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all the airplanes",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the airplane controller",
            error: error
        })
    }
}   

module.exports = {
   createAirplane,
   destroyAirplane,
   updateAirplane,
   fetchAirplane,
   fetchAllAirplanes
}