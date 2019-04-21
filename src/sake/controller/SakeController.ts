import { Request, Response, NextFunction } from 'express';
import SakeRepository from '../Repository/SakeRepository';
import { sakeModel } from '../model/sake';

export class SakeController {
    public static list = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const sakeList = await new SakeRepository().findAll();
        return res.json(sakeList);
    };

    /**
     * static create
     */
    public static create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const sake = new sakeModel(req.body);
        sake.save(err => {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.json({
                status: 'success',
                result: sake
            });
        });
    };
}
