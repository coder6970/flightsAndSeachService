const {AirplaneRepository} = require ('../repository/index');
const CrudService = require ('./crudService')
class AirplaneService extends CrudService{
    constructor(){
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository)
    }
}
module.exports = AirplaneService