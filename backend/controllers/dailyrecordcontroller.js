import { Dailyrecord } from "../models/dailyrecords.model.js";
//add a new daily record
export const createDailyRecord = async(req,res) => {
    const {useranimal, weight, production, temperature} = req.body;
    try {
        const newDailyRecord = new Dailyrecord ({
            useranimal,
            weight,
            production,
            temperature
        });
        const savedRecord = await newDailyRecord.save();
        return res.status(201).json({message: "Daily record created", data: savedRecord})
    } catch (error) {
        return res.status(500).json({message: "Error ctrating daily record",error})
        
    }
}

// get all daily records
export const getAllDailyRecords = async (req, res) => {
    try {
        const dailyRecords = await Dailyrecord.find().populate("useranimal")
        return res.status(200).json(dailyRecords);


        
    } catch (error) {
        return res.status(500).json({message: "Error fetching daily record",error})
        
    }
}
//get a daily record by id
export const getDailyRecordById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const dailyRecord = await Dailyrecord.findById(id).populate("useranimal");
  
      if (!dailyRecord) {
        return res.status(404).json({ message: "Daily record not found" });
      }
  
      return res.status(200).json(dailyRecord);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching daily record", error });
    }
  };
  //update
  export const updateDailyRecord = async (req, res) => {
    const { id } = req.params;
    const { weight, production, temperature } = req.body;
  
    try {
      const updatedRecord = await Dailyrecord.findByIdAndUpdate(
        id,
        { weight, production, temperature },
        { new: true } 
      );
  
      if (!updatedRecord) {
        return res.status(404).json({ message: "Daily record not found" });
      }
  
      return res.status(200).json({ message: "Daily record updated", data: updatedRecord });
    } catch (error) {
      return res.status(500).json({ message: "Error updating daily record", error });
    }
  };
  //delete record
  export const deleteDailyRecord = async (req,  res) => {
    const {id} = req.params
    try {
        const deletedRecord = await Dailyrecord.findByIdAndDelete(id);
    
        if (!deletedRecord) {
          return res.status(404).json({ message: "Daily record not found" });
        }
    
        return res.status(200).json({ message: "Daily record deleted", data: deletedRecord });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting daily record", error });
      }
    };