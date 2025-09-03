const { Op } = require('sequelize');
const {Flights} = require ('../models/index');

class FlightsRepository{

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId)filter.arrivalAirportId = data.arrivalAirportId;
        if(data.departureAirportId)filter.departureAirportId = data.arrivalAirportId;
        let priceFilter = [];
        if(data.minPrice){
           priceFilter.push({price:{[Op.gte] : data.minPrice}})
        }
        if(data.maxPrice){
           priceFilter.push({price:{[Op.lte] : data.maxPrice}})
        }
        Object.assign(filter,{[Op.and] : priceFilter});
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlights(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where : filterObject
            });
            return flights;
        }
        catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightsRepository