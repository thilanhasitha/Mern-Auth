import express, { Router } from 'express';
import { getusers, updateUser, deleteUser } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter = Router();

userRouter.get('/getusers',getusers);
userRouter.post('/update/:id',verifyToken,updateUser);
userRouter.delete("/delete/:id",verifyToken,deleteUser);



export default userRouter;