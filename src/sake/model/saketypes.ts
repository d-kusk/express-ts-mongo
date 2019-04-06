import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sakeType = new Schema({
    _id: Number,
    type: String
});

export const sakeTypeModel = mongoose.model('SakeType', sakeType);
