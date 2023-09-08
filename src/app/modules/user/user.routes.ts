import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUsers);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getASingleUser);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.updateASingleUser
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteAUser);

export const UserRoutes = router;
