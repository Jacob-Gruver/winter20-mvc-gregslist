import BaseController from "../utils/BaseController.js";
import { houseService } from "../services/HouseService.js"

export class HouseController extends BaseController {
    constructor() {
        super("api/houses");
        this.router
            .get("", this.getHouses)
            .get("/:id", this.getHouse)
            .post("", this.addHouse)
            .put("/:id", this.editHouse)
            .delete("/:id", this.deleteHouse)
    }
    
    async getHouses(req, res, next) {
        // get request is sent to the service via try catch block 
        try {
         return res.send( await houseService.getHouses(req.body));
         // this line of code uses res.send() to send the result aka. houseservice at funct get house 
        } catch (error) {
            next (error);
        }
    }

    async getHouse(req, res, next) {
        // get request 
        try {
            return res.send( await houseService.getHouse(req.body.id));
            // this line sends request to the service
        } catch (error) {
            next (error);
        }
    }

    async addHouse(req, res, next) {
        try {
            return res.send( await houseService.addHouse(req.body));
        } catch (error) {
            next (error);
        }
    }

    async editHouse(req, res, next) {
        try {
            return res.send( await houseService.editHouse(req.params.id, req.body));
        } catch (error) {
            next (error);            
        }
    }

    async deleteHouse(req, res, next) {
        try {
            return res.send( await houseService.deleteHouse(req.body.id));
        } catch (error) {
            next (error);
        }
    }

}