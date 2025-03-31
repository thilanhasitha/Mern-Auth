import { jwt } from "jsonwebtoken"
import { errorHandler } from "./error";



export const verifyToken= (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token) return next(errorHandler(401,"You can not Authenticate!"));

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(401,"Token is not valid"))

        req.user= user;
        next();
    })
}