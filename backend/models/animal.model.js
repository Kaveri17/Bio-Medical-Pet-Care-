import mongoose from "mongoose";

const animalCategorySchema = new mongoose.Schema({
  breed: { type: [String], required: true },
  animal_type: {
    type: String,
    required: true,
  },
});

export const AnimalCategory = mongoose.model("AnimalCategory", animalCategorySchema);
