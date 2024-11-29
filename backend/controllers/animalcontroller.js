import { UserAnimal } from "../models/animal.model.js"



//create a new animal
export const addanimal = async(req, res) => {
    let animal = await UserAnimal.findOne({animal_type:req.body.animal_type})
    if (animal) {
        return res.status(400).json({error:"Animal already exists"})
    }

animal = await UserAnimal.create({
    animal_type: req.body.animal_type,
    user_id: req.body.user_id,
    breed: req.body.breed,
    age:req.body.age,
    gender:req.body.gender

})
if(!animal){
    return res.status(400).json({error:"Something went wrong"})
}
res.send(animal)
}
//get all animals

export const getAllAnimals = async(req, res) => {
    try {
        const animals = await UserAnimal.find().populate("user_id")
        res.status(200).json({success:true,data:animals})
        
    } catch (error) {
        res.status(500).json({success:false, message: error.message})
        
    }
}
//get a single animal by id
export const getAnimalById = async (req, res) => {
    try {
        const {id} = req.params;
        const animal = await UserAnimal.findById(id).populate("user_id");
        if(!animal) {
            return res.status(404).json({success:false, message:"Animal is not found"})
        }
        res.status(200).json({success:true, data:animal})
        
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
        
    }
}
