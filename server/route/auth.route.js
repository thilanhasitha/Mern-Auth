import express, { Router } from 'express';
import { createUser, signin,signout } from '../controller/auth.controller.js';

const route  = Router();

route.post('/signup',createUser);
route.post('/signin',signin);
route.get('/signout',signout);

export default route;
