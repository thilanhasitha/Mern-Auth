import express, { Router } from 'express';
import { createUser, signin } from '../controller/auth.controller.js';

const route  = Router();

route.post('/signup',createUser);
route.post('/signin',signin);

export default route;
