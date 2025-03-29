import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

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
            msg:"User is registered"
        })
    }
    catch(error){
        res.status(400);
        next(error);
    }
   
}
