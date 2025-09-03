class CrudService{
    constructor(repository){
        this.crudRepository = repository;
    }

    async create(data) {
        try {
            const response = await this.crudRepository.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the crud service");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.crudRepository.destroy(id);
            return response;
        } catch (error) {
            console.log("something went wrong in the crud service");
            throw error;
        }
    }

    async update(id,data) {
        try {
            const response = await this.crudRepository.update(id,data);
            return response;
        } catch (error) {
            console.log("something went wrong in the crud service");
            throw error;
        }
    }

    async fetch(id) {
        try {
            const response = await this.crudRepository.fetch(id);
            return response;
        } catch (error) {
            console.log("something went wrong in the crud service");
            throw error;
        }
    }

    async fetchAll() {
        try {
            const response = await this.crudRepository.fetchAll();
            return response;
        } catch (error) {
            console.log("something went wrong in the crud service");
            throw error;
        }
    }
}

module.exports = CrudService