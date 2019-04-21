import * as Express from 'express';
import { SakeController } from '../sake/controller/SakeController';
import { SakeTypesController } from '../sake/controller/SakeTypesController';
import { TemperatureController } from '../sake/controller/TemperatureController';

const router: Express.Router = Express.Router();

router.get('/sake/temperature/list', TemperatureController.list);

router.get('/sake/type/list', SakeTypesController.list);

router.post('/sake/create', SakeController.create);
router.get('/sake/list', SakeController.list);

export { router };
