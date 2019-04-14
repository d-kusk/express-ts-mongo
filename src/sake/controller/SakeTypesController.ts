import { Request, Response, NextFunction } from 'express';
import SakeTypeRepository from '../Repository/SakeTypeRepository';

export class SakeTypesController {
    public static list = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const sakeList = await new SakeTypeRepository().find();
        res.json(sakeList);
    };
}
