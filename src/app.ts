import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { router as indexRouter } from './router/index';
import { router as sakeRouter } from './router/sake';
import { connectDB } from './db';

const app = express();

connectDB();

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
