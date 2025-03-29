import express, { Router } from 'express';
import { getusers } from '../controller/user.controller.js';

const userRouter = Router();

userRouter.get('/getusers',getusers)


export default userRouter;