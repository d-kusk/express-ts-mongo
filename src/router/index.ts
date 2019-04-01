import * as Express from 'express';
import { index as indexController } from '../controllers/index';

const router: Express.Router = Express.Router();

router.get('/', indexController);

export { router };
