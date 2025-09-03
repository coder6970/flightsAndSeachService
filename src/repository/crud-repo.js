class CrudRepository{
    constructor(model){
        this.newModel = model;
    }
    async create(data) {
        try {
          const response = await this.newModel.create(data);
          return response;
        } catch (error) {
          console.log("something went wrong");
          throw { error };
        }
      }
    
      async destroy(id) {
        try {
          await this.newModel.destroy({ where: { id } });
          return true;
        } catch (error) {
          console.log("something went wrong");
          throw { error };
        }
      }
      async update(id, data) {
        try {
          const response = await this.newModel.findByPk(id);
          await response.update(data);
          return response;
        } catch (error) {
          console.log("something went wrong");
          throw { error };
        }
      }
      async fetch(id) {
        try {
          const response = await this.newModel.findByPk(id);
          return response;
        } catch (error) {
          console.log("something went wrong");
          throw { error };
        }
      }
    
      async fetchAll() {
        try {
          const response = await this.newModel.findAll();
          return response;
        } catch (error) {
          console.log("something went wrong");
          throw { error };
        }
      }
}
module.exports = CrudRepository;