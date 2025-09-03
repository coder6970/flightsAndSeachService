const {CityRepository} = require('../repository/index');
const CrudService = require('./crudService')
class CityService extends CrudService{
    // this constructor pattern not necessary we can directly use CityRepository object but it is considered a good practice to follow it 
    constructor() {
        const cityRepository = CityRepository;
        super(cityRepository);
        this.cityRepository = cityRepository
    }

    async createCities(data){
         try {
            const response = await this.cityRepository.createCities(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the city service");
            throw error;
        }
    }

    async fetchCityAirports(id) {
        try {
            const airports = await this.cityRepository.fetchCityAirports(id);
            return airports;
        } catch (error) {
            console.log("something went wrong in the city service");
            throw error;
        }
    }

    async fetchAll(filter){
        try {
            const cities = await this.cityRepository.fetchAll({name : filter.name});
            return cities;
        } catch (error) {
            console.log("something went wrong in the city service");
            throw error;
        }
    }
}
module.exports = CityService;