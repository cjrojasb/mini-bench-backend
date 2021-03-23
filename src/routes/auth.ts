import { Router } from 'express';

const router = Router();

import { signUp, logIn } from '../controllers/auth.controller';

router.route('/auth/signup')
  .post(signUp)

router.route('/auth/login')
  .post(logIn)

export default router;
