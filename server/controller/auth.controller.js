import { error } from "console";
import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const createUser = async(req,res,next)=>{

    const {username, email, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,email,password:hashPassword,
    });

    try{
        await newUser.save();
        res.status(200);
        res.json({
            msg:"User is registered Successfully!"
        })
    }
    catch(error){
        res.status(400);
        next(error);
    }
   
};

export const signin = async(req,res,next)=>{
    const{email,password} = req.body;
    try{
        //check the email is valid or not
        const validUser = await User.findOne({email});
        if(!validUser)return next(errorHandler(401,'User not found'));

        //check the password is valid or not
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,'wrong credentials'));

        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET,);
        const {password:hashedPassword, ...rest} =validUser._doc;
        const expirayDate =new Date(Date.now() + 3600000); // 1 hour
        res.
        cookie('access_token',token,{httpOnly:true, expires:expirayDate }).status(200).json(rest);



    }
    catch(error){
        next(error);

    }
}
