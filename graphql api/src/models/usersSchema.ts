
import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken';

export interface userInstance {
    _id: string;
    email:string;
    password:string;
    username:string;
    fullname:string;
	salt:string;
}

const accessSecret = process.env.ACCESS_TOKEN_SECRET ?? '';

const usersSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
	},
    salt: {
        type:String,
        required:true
    },
    isAdmin: {
        type:Boolean,
        required:true
    }
},{timestamps:true});

usersSchema.methods.authToken = function () {
	return jwt.sign({email: this.email, isAdmin:this.isAdmin}, accessSecret, {expiresIn: '3d'}); // eslint-disable-line 
};

const usersModel = mongoose.model<userInstance>('users', usersSchema);

export default usersModel;
