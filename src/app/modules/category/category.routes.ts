import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.insertIntoDB
);

router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getASingleCategory);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.updateASingleCategory
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteACategory
);

export const CategoryRoutes = router;
