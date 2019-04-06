import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { router as indexRouter } from './router/index';
import { router as sakeRouter } from './router/sake';
import { MONGO_URL, DB_NAME } from './config';
import mongoose from 'mongoose';

const app = express();

// - TODO: 別ファイルに切り分ける
mongoose.connect(`${MONGO_URL}/${DB_NAME}`, {
    // - TODO: 環境変数使う
    auth: { authSource: 'admin' },
    user: 'root',
    pass: 'example',
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/sake', sakeRouter);
app.use('/', indexRouter);

app.use(
    morgan('dev', {
        skip(req, res) {
            return res.statusCode < 400;
        }
    })
);

// log all requests to access.log
app.use(
    morgan('common', {
        stream: fs.createWriteStream(path.join(process.cwd(), './access.log'), {
            flags: 'a'
        })
    })
);

export default app;
