import { Router } from 'express';

const router = Router();

import { getAccount, getAccounts, setAccount, deleteAccount, updateAccount } from '../controllers/account.controller';

router.route('/accounts')
  .get(getAccounts)
  .post(setAccount)

router.route('/accounts/:rut')
  .get(getAccount)

router.route('/accounts/update/:id')
  .put(updateAccount)

export default router;
