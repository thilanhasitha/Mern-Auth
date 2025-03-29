import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './route/auth.route.js';
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
app.use(express.json());
app.use(cors());

app.use('/api/v1/user',userRouter);
app.use('/api/v1',route);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})