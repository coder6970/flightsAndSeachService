const {CityService} = require('../services/index');
const cityService = new CityService();


const createCity = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the city controller",
            error: error
        })
    }
}

const destroyCity = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the city controller",
            error: error
        })
    }
}

const updateCity = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the city",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the city controller",
            error: error
        })
    }
}

const fetchCity = async (req, res) => {
    try {
        const response = await cityService.fetchCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the city",
            error: {}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in the city controller",
            error: error
        })
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity,
    fetchCity
}