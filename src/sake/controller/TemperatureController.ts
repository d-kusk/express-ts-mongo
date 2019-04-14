import { Request, Response, NextFunction } from 'express';
import TemperatureRepository from '../Repository/TemperatureRepository';

export class TemperatureController {
    public static list = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const temperatureList = await new TemperatureRepository().find();
        res.json(temperatureList);
    };
}
