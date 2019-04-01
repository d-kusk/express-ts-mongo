import * as Express from 'express';

const index = (req: Express.Request, res: Express.Response) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
};

export { index };
