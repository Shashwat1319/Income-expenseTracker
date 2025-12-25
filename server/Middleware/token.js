import { userModal } from "../DbModals/DbModals.js";
import jwt from "jsonwebtoken"
const Secret = "hello"
const auth=async(req,res,next)=>{

    const authHeader = req.headers['authorization']
    if(!authHeader){
        return res.status(401).json({msg:"Token Missing",success:false})
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,Secret)
        const user = await userModal.findOne({email:decoded.email})
        if(!user){
            return res.status(401).json({msg:"User Not found"})
        }
        req.user = user
        next()

    }catch(err){
        return res.status(401).json({ msg: "Invalid or expired token", success: false });
    }
}

export default auth