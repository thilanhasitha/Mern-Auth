import express, { Router } from 'express';
import { createUser } from '../controller/auth.controller.js';

const route  = Router();

route.post('/signup',createUser);

export default route;
