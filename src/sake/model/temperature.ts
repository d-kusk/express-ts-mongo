import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const temperature = new Schema({
    _id: Number,
    temperature: String
});

export const temperatureModel = mongoose.model('Temperature', temperature);
