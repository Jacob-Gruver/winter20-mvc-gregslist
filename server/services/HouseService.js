import { dbContext } from "../db/DbContext.js"

class HouseService {
    
    async getHouses(body) {
        return await dbContext.Houses.find(body);
        //returns to the user the list of houses in the body   
    }

    async getHouse(id) {
        return await dbContext.Houses.find(id);
        //returns to the user the one house by id 
    }

    async addHouse(body) {
        return await dbContext.Houses.create(body);
        //creates new house to the server of dbContext
    }

    async editHouse(id, body) {
        return await dbContext.Houses.findByIdAndUpdate(id, body, {new: true});
        // Check this out later "findByIdAndUpdate"
    }

    async deleteHouse(id) {
        return await dbContext.Houses.findByIdAndDelete(id);
    }

}
export const houseService = new HouseService();