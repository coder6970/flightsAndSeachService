const { FlightService } = require("../services/index");
const flightService = new FlightService();

const createFlight = async function (req, res) {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong in the flight controller",
      error: error,
    });
  }
};


const getFlights = async function (req, res) {
  try {
    const response = await flightService.getFlights(req.query);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched a flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong in the flight controller",
      error: error,
    });
  }
};

module.exports = {
  createFlight,
  getFlights
};
