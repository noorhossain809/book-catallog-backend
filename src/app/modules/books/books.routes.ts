import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookController } from './books.controller';

const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.insertIntoDB
);
router.get('/', BookController.getAllBooks);
router.get('/:id/category', BookController.getBookByCategory);
router.get('/:id', BookController.getSingleBook);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.updateBook);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook);

export const BookRoutes = router;
