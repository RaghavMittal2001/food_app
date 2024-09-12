import mongoose from 'mongoose';

import { Schema } from 'mongoose';
const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    Password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now

    }
});

export const User =mongoose.model('User',UserSchema )