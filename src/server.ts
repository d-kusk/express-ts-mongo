import express from 'express';
import { app } from './app';

const port: string = process.env.PORT || '3000';

const server = app.listen(port, (err: express.ErrorRequestHandler) => {
    if (err) console.error(err);
    console.log(`open your browser for http://localhost:${port}`);
});

export default server;
