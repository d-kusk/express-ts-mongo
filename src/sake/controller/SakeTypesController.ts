import { Request, Response, NextFunction } from 'express';
import SakeTypeRepository from '../Repository/SakeTypeRepository';

export class SakeTypesController {
    public static list = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const sakeTypeList = await new SakeTypeRepository().findAll();
        res.json(sakeTypeList);
    };
}
