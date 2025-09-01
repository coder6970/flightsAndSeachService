const {AirportRepository} = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository =  AirportRepository;
    }

    async createCity(data) {
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("something went wrong in the city service");
            throw error;
        }
    }


    async deleteAirport(id) {
        try {
            const response = await this.airportRepository.deleteAirport(id);
            return response;
        } catch (error) {
            console.log("something went wrong in the city service");
            throw error;
        }
    }

    async updateAirport(id, data) {
        try {
            const airport = await this.airportRepository.updateAirport(id, data);
            return airport;
        } catch (error) {
           console.log("something went wrong in the city service");
            throw error;
        }
    }

    async fetchAirport(id) {
        try {
            const airport = await this.airportRepository.fetchAirport(id);
            return airport;
        } catch (error) {
            console.log("something went wrong in the city service");
            throw error;
        }
    }

    async fetchAllAirports(filter){
        try {
            const airports = await this.airportRepository.fetchAllAirports({name : filter.name});
            return airports;
        } catch (error) {
            console.log("something went wrong in the city service");
            throw error;
        }
    }
}
module.exports = AirportService;