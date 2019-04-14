import { Request, Response, NextFunction } from 'express';

export class IndexController {
    public static list = (req: Request, res: Response, next: NextFunction) => {
        const params: object = { message: 'Hello, Express!' };
        res.json(params);
    };
}
