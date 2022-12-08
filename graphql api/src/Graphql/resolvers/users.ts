import moviesModel, { moviesInstance } from "../../models/moviesModel";
import usersModel from "../../models/usersSchema";
import { CreateUser, ModifyUser } from "./interface";
import bcrypt, { genSalt } from 'bcrypt';


const UserResolver = {
    Query:{
        allUsers: async()=>{
            try{
                    const users = await usersModel.find({});
                    if(users){
                        return users;
                    }
            }
            catch(err){
                console.log(err)
            }
        },
        singleUser: async(_:unknown, args:{_id:string})=>{
            try {
                const users = await usersModel.findOne({_id:args._id}, {createdAt:0, updatedAt:0, __v:0})
                return users;
                
            } catch (err) {
                console.log(err)
            }
        }
    },

    Mutation:{
        createUser: async( _:unknown, args:CreateUser )=>{
            try {
                const salt = await genSalt();
                const password = await bcrypt.hash( args.input.password, salt)

                const newUser = {
                    username:args.input.username,
                    password,
                    fullname:args.input.fullname,
                    email:args.input.email,
                    isAdmin:false,
                    salt,
                }
                

                const user = await usersModel.create(newUser);
                if(user)
                return {...newUser, _id:user._id};
            } 
            catch (err) {
                console.log(err)
            }
        },

        deleteUser: async( _:unknown, args:{_id:string} )=>{
            try {
                const {_id} = args

                const user = await usersModel.deleteOne({_id});
                if(user)
                return {message:"Successfully deleted"};
            } 
            catch (err) {
                console.log(err)
            }
        },

        updateUser: async( _:unknown, args:ModifyUser)=>{
            try {
                const {email, password, username, fullname, _id} = args.input
                const data = {email, password, username, fullname}

                const user = await usersModel.updateOne({_id}, data);
                if(user)
                return {...data, _id};
            } 
            catch (err) {
                console.log(err)
            }
        }
    }
}

export default UserResolver;