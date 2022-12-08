import moviesModel, { moviesInstance } from "../../models/moviesModel";
import usersModel from "../../models/usersSchema";
import { CreateMovie } from "./interface";


const ListingResolver = {
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
                console.log(users)
                return users;
                
            } catch (err) {
                console.log(err)
            }
        }
    },
    Mutation:{
        // createMovie: async( _:unknown, args:CreateMovie )=>{
        //     try {
        //         const newMovie = {
        //             title:args.input.title,
        //             image:args.input.image,
        //             address:args.input.description,
        //             price:args.input.price,
        //             noOfRooms:args.input.addedBy
        //         }

        //         const movie = await moviesModel.create(newMovie);
        //         if(movie)
        //         return movie;
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
    }
}

export default ListingResolver;