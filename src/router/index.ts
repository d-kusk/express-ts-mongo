import * as Express from 'express';
import { IndexController } from '../index/controller/index';
import { SakeController } from '../sake/controller/SakeController';
import { SakeTypesController } from '../sake/controller/SakeTypesController';

const router: Express.Router = Express.Router();

router.get('/sake/type/list', SakeTypesController.list);

router.get('/sake/create', SakeController.create);
router.get('/sake/list', SakeController.list);

router.get('/', IndexController.list);

export { router };
