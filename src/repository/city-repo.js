const { City } = require("../models/index");
const { Op } = require("sequelize");
const CrudRepository = require('./crud-repo')
class CityRepository extends CrudRepository{
  constructor(){
    super(City)
  }
  async createCities(data) {
    try {
      const response = await City.bulkCreate(data);
      return response;
    } catch (error) {
      console.log("something went wrong");
      throw { error };
    }
  }

  async fetchCityAirports(id) {
    try {
      const city = await City.findByPk(id);
      const airports = await city.getAirports();
      return airports;
    } catch (error) {
      console.log("something went wrong");
      throw { error };
    }
  }


  async fetchAll(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong");
      throw { error };
    }
  }
}
module.exports = new CityRepository();
