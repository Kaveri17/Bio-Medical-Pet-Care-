import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://alinaadhikari108:rIj15FHCPvXo3ZhA@cluster0.s7mx5.mongodb.net/animal helathcare').then(()=>console.log("MongoDb Connected Successfully"));

}