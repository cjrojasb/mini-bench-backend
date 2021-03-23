import { Router } from 'express';

const router = Router();

import { getUsers, getUser } from '../controllers/user.controller';

router.route('/users')
  .get(getUsers)

 router.route('/users/:id')
  .get(getUser) 

export default router;
