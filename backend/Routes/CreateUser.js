import express from 'express';
const router = express.Router();
import { User } from '../models/Users.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const SECRET_KEY ="iamraghavmittalhibuddywhatsapp"
router.post("/CreateUser",[
    body('email').isEmail(),
    body('name').isLength({min:5}),
    body('Password','!Too short password ').isLength({min:5})
],async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    var salt =  bcrypt.genSaltSync(10);
    var hash =  bcrypt.hashSync(req.body.Password, salt);
     
    try{
        console.log(req);
        const user = await User.create({
            name:req.body.name,
            Password : hash,
            email:req.body.email,
            location:req.body.location
        })
        
        res.status(201).json({ success: true, user });
    } catch(error){
        console.log(error);
        res.status(400).json({success:false, message: error.message });
    }
})


router.post("/LoginUser",[
    body('email').isEmail(),
    body('Password','!Too short password ').isLength({min:5})
],async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        let email= req.body.email  ;
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({error: "user is not find, try Logging with correct credentials" });
        }
        const pwdCompare =bcrypt.compare(req.body.Password,user.Password)
        if(!pwdCompare){
            return res.status(400).json({ message: "the password is incorrect " });
        }
        const data ={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data,SECRET_KEY)
        res.json({ success: true,authToken:authToken}); 

    } catch(error){
        console.log(error);
        res.status(500).json({success:false, message: error.message });
    }
})


 export default router;