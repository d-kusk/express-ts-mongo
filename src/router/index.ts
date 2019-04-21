import * as Express from 'express';
import { IndexController } from '../index/controller/index';

const router: Express.Router = Express.Router();

router.get('/', IndexController.list);

export { router };
