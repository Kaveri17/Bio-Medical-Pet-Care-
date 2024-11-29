
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const vaccineSchema = new mongoose.Schema(
    {
        vaccine_name: {
            type: String,
            required: true
        },
        animal_type: {
            type: ObjectId,
            ref: "Breed",
            required:true
        },
        breed: {
            type: ObjectId,
            ref: "Breed",
            required:true
        },
        frequency: {
            type:String,
            required: true,
        },
        duration: {
            type: Number,
            required:true
        },
        age: {
            type: Number,
            required: true
        }
    },
{
    timestamps:true
}
)

export const Vaccine = mongoose.model("Vaccine", vaccineSchema)