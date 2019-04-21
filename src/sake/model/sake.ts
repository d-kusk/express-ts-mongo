import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sake = new Schema({
    brand: { type: String, required: true },
    type: { type: Number, ref: 'SakeType', required: true },
    impressions: [
        {
            temperature: { type: Number, ref: 'Temperature' },
            impression: String
        }
    ]
});

export const sakeModel = mongoose.model('Sakes', sake);
