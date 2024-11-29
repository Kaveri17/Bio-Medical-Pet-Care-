import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const userAnimalSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    animal_category: {
      type: ObjectId,
      ref: "AnimalCategory",
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const UserAnimal = mongoose.model("UserAnimal", userAnimalSchema);
