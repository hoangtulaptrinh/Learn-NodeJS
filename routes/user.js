import express from 'express';

import { searchUser, showAllUser, detailUser, createUser, addUser } from '../controllers/user';

const router = express.Router();

// Bài 3 Query parameters
router.get('/search', searchUser);
// Bài 3 Query parameters

// Bài 6 - Tích hợp database (lowdb)
router.get('/', showAllUser);
// Bài 6 - Tích hợp database (lowdb)

// Bài 7 - View user
router.get('/create', createUser);
router.get('/:id', detailUser); // phải để /:id ở dưới /create vì để  ở trên khi vào /create nó sẽ nhận id = create => underfined
router.post('/create', addUser);
// Bài 7 - View user

export default router;
