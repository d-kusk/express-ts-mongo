import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { router } from './router/index';
import { connectDB } from './db';

export const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);
app.use((req, res) => {
    res.status(404);
    res.json({
        message: '404 Not Found',
        requestPath: req.path
    });
});

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
