const {Airport} = require('../models/index');
const {Op} = require('sequelize');
class AirportRepository{
    async createAirport({name,address,city_id}) {
        try{
            const city = await Airport.create({name,address,city_id});
            return city;
        }
        catch(error){
            console.log("something went wrong");
            throw{error}
        }
    }
    async deleteAirport (id) {
        try{
            await Airport.destroy({where: {id}});
            return true;
        }
        catch(error){
            console.log("something went wrong");
            throw{error}
        }
    }
    async updateAirport(id,data){
        try {
        const airport = await Airport.findByPk(id);
        airport.set(data)
        await airport.save();
        return airport;

        } catch (error) {
             console.log("something went wrong");
            throw{error}
        }
    }
    async fetchAirport(id){
        try {
            const airport = await Airport.findByPk(id);
            return airport;
        } catch (error) {
             console.log("something went wrong");
            throw{error}
        }
    }
    
    async fetchAllAirports(filter){
        try {
            if(filter.name){
                const airports = await Airport.findAll(
                  { where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }}
                )
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
             console.log("something went wrong");
            throw{error}
        }
    }
}
module.exports = new AirportRepository();