import { AnimalCategory } from "../models/animal.model.js"

//create a new animal
export const addanimal = async(req, res) => {
    let animal = await AnimalCategory.findOne({animal_type:req.body.animal_type})
    if(animal) {
        return res.status(400).json({error:"Animal already exists"})
    }

animal = await AnimalCategory.create({
    animal_type: req.body.animal_type,
    breed: req.body.breed,
})
if(!animal){
    return res.status(400).json({error:"Something went wrong"})
}
res.send(animal)
}

//get all animals
export const getAllAnimals = async(req, res) => {
    try {
        const animals = await AnimalCategory.find()
        res.status(200).json({success:true,data:animals})
        
    } catch (error) {
        res.status(500).json({success:false, message: error.message})
        
    }
}
//get a single animal by id
export const getAnimalById = async (req, res) => {
    try {
        const {id} = req.params;
        const animal = await AnimalCategory.findById(id);
        if(!animal) {
            return res.status(404).json({success:false, message:"Animal is not found"})
        }
        res.status(200).json({success:true, data:animal})
        
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
        
    }
}

//update an animal
export const updateAnimal = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body;
        const updatedAnimal = await AnimalCategory.findByIdAndUpdate(id, updatedData, {
            new:true,
            // runValidators:true
        })
        if(!updateAnimal) {
            return res.status(404).json({success:false, message:"Animal not found"})
        }
        res.status(200).json({ success: true, data: updatedAnimal });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
//delete animals
export const deleteAnimal = async (req, res) => {
    try {
        const {id} = req.params
        const deletedAnimal = await AnimalCategory.findByIdAndDelete(id);
        if (!deletedAnimal) {
            return res.status(404).json({ success: false, message: "Animal not found" });
          }
          res.status(200).json({ success: true, message: "Animal deleted successfully" });
        } catch (error) {
          res.status(500).json({ success: false, message: error.message });
        }
      };
