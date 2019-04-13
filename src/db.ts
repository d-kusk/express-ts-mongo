import { DB } from './config';
import mongoose from 'mongoose';

export function connectDB() {
    mongoose.connect(`${DB.MONGO_URL}/${DB.NAME}`, {
        auth: { authSource: 'admin' },
        user: DB.MONGO_USER,
        pass: DB.MONGO_PASS,
        useNewUrlParser: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('connected');
    });
}
