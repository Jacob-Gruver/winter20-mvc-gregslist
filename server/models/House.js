import mongoose from "mongoose";
const Schema = mongoose.Schema;
//the model is being saved into the dbContext as a mongoose schema

const House = new Schema(
    {
        bedrooms: {type: Number, required: true},
        bathrooms: {type: Number, required: true},
        levels: {type: Number, required: true},
        imgUrl: {type: String, required: true},
        year: {type: Number, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true}

    }
);

export default House;
/*
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels  
    this.imgUrl = imgUrl
    this.year = year 
    this.price = price
    this.description = description
*/