const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong");
      throw { error };
    }
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
  async deleteCity(id) {
    try {
      await City.destroy({ where: { id } });
      return true;
    } catch (error) {
      console.log("something went wrong");
      throw { error };
    }
  }
  async updateCity(id, data) {
    try {
      //    const city = await City.update(data,{
      //     where : {id}
      //    });
      //    return city;
      const city = await City.findByPk(id);
      city.name = data.name;
      await city.save();
      return city;
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

  async fetchCity(id) {
    try {
      const city = await City.findByPk(id);
      return city;
    } catch (error) {
      console.log("something went wrong");
      throw { error };
    }
  }

  async fetchAllCities(filter) {
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
