
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
        breeds: {
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
        // age_range: {
        //     type: Number,
        //     required: true
        // }

        age_range: {
            min: {
              type: Number,
              required: true,
              validate: {
                validator: (value) => value >= 0,
                message: 'Minimum age must be a non-negative number.',
              },
            },
            max: {
              type: Number,
              required: true,
              validate: {
                validator: function (value) {
                  return value >= this.age_range.min;
                },
                message: 'Maximum age must be greater than or equal to minimum age.',
              },
            },
          },
    },
{
    timestamps:true
}
)

export const Vaccine = mongoose.model("Vaccine", vaccineSchema)