import * as Express from 'express';
import { SakeController } from '../sake/controller/SakeController';

const router: Express.Router = Express.Router();

router.get('/create', SakeController.create);
router.get('/list', SakeController.list);

export { router };
