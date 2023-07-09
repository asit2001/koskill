import express from 'express';
import { signup, login,logOut } from '../controller/userController';

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logOut);

export default authRouter;
