import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { router as indexRouter } from './router/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);

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
        stream: fs.createWriteStream(
            path.join(process.cwd(), 'logs/access.log'),
            {
                flags: 'a'
            }
        )
    })
);

export default app;
