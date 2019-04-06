import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sake = new Schema({
    brand: String,
    type: { type: Number, ref: 'SakeType' },
    impressions: [
        {
            temperature: { type: Number, ref: 'Temperature' },
            impression: String
        }
    ]
});

export const sakeModel = mongoose.model('Sakes', sake);
