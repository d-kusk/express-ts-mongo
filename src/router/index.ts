import * as Express from 'express';
import { IndexController } from '../index/controller/index';
import { SakeController } from '../sake/controller/SakeController';

const router: Express.Router = Express.Router();

router.get('/sake/create', SakeController.create);
router.get('/sake/list', SakeController.list);

router.get('/', IndexController.list);

export { router };
