import { Router } from 'express';
import { getHome } from '../controller/testController';

const router = Router();

router.get('/home', getHome);

export default router;