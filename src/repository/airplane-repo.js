const {Airplane} = require ('../models/index');
const CrudRepository = require('./crud-repo')
class AirplaneRepository extends CrudRepository {
    constructor(){
        super(Airplane)
    }
}

module.exports = AirplaneRepository