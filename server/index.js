import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './route/user.route.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("mongo database is connected!");
})
.catch((error)=>{
    console.log(error)
})

app.use('/api/v1/user',userRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})