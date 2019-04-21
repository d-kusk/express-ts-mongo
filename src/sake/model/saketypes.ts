import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sakeType = new Schema({
    _id: Number,
    type: { type: String, required: true }
});

export const sakeTypeModel = mongoose.model('SakeType', sakeType);
