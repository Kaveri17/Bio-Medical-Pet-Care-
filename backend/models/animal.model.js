import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema
const animalSchema = new mongoose.Schema(
    {
        animal_type: {
            type: String,
            required: true
        },
        user_id: [{
            type: ObjectId,
            ref: "User",
            // required: true
        }],
        breed: { type: [String], required: true },
        age:{
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true

        },
        


    },{timestamps:true})
    export const UserAnimal = mongoose.model("UserAnimal", animalSchema);
