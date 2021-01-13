import ValueSchema from "../models/Value";
import HouseSchema from "../models/House.js";
import mongoose from "mongoose";
// imoprt your cars collection into your dbContext.js as a mongoose schema

class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Houses = mongoose.model("House", HouseSchema);

  // Create a cas collection from mongoose.model at carsSchema
}

export const dbContext = new DbContext();
