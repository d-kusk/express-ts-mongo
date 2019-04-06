import * as Express from 'express';
import index from '../index/controller/index';

const router: Express.Router = Express.Router();

router.get('/', index.list);

export { router };
