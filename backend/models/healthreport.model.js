import mongoose from 'mongoose';

const healthReportSchema = new mongoose.Schema({
    animal_type: {
        type: ObjectId,
        ref: "Breed",
        required: true
    },
    breeds: {
        type: ObjectId,
        ref: "Breed",
        required: true
    }, 
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    milkProduction: {
        type: Number,
    },
    temperature: {
        type: Number,
    },
    healthStatus: {
        type: String,
    },
});

const HealthReport = mongoose.model('HealthReport', healthReportSchema);

export default HealthReport;
