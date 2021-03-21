import { Router } from 'express';

const router = Router();

import { getAccount, getAccounts, setAccount, deleteAccount, updateAccount } from '../controllers/account.controller';

router.route('/accounts')
  .get(getAccounts)
  .post(setAccount)

router.route('/accounts/:id')
  .get(getAccount)
  .delete(deleteAccount)
  .put(updateAccount)

export default router;
