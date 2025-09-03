const { AirplaneRepository, FlightsRepository } = require("../repository/index");
const {compareTime} = require("../utils/helper")

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightsRepository();
  }

  async createFlight(data) {
    try {
      if(!compareTime(data.arrivalTime,data.departureTime)){
        throw {error : "arrival time cannot be greater than departure time"}
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({ 
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong inside service layer");
      throw { error };
    }
  }

  async getFlights(filter){
    try{const flights = await this.flightRepository.getFlights(filter);
    return flights;}
    catch(error){
      console.log("something went wrong inside service layer");
      throw { error };
    }
  }
}

module.exports = FlightService