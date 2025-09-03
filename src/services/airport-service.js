const {AirportRepository} = require('../repository/index');
const CrudService = require('./crudService')
class AirportService extends CrudService{
    constructor() {
        const airportRepository =  new AirportRepository();
        super(airportRepository);
        this.airportRepository = airportRepository;
    }

    async fetchAll(filter){
        try {
            const airports = await this.airportRepository.fetchAll({name : filter.name});
            return airports;
        } catch (error) {
            console.log("something went wrong in the airport service");
            throw error;
        }
    }
}
module.exports = AirportService;