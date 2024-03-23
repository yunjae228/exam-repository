import express from 'express';
import * as postController from '../controller/post.js'

const router = express.Router();

router.post('/register', postController.post)

export default router