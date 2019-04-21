import { Request, Response, NextFunction } from 'express';
import SakeRepository from '../Repository/SakeRepository';
import SakeTypeRepository from '../Repository/SakeTypeRepository';
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
        const kuheiji = new sakeModel({
            brand: '醸し人九平次',
            type: 9,
            impressions: [{ temperature: 7, impression: 'めちゃうま' }]
        });

        kuheiji.save(err => {
            if (err) throw err;
        });

        res.json({ msg: 'success' });
    };
}
