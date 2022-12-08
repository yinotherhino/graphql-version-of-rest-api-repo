import moviesModel, { moviesInstance } from "../../models/moviesModel";
import usersModel from "../../models/usersSchema";
import { CreateMovie } from "./interface";


const ListingResolver = {
    Query:{
        allMovies: async()=>{
            try{
                    const movies = await moviesModel.find({}) as unknown as moviesInstance;
                    if(movies){
                        return movies;
                    }
            }
            catch(err){
                console.log(err)
            }
        },
        singleMovie: async(_:unknown, args:{id:string})=>{
            try {
                const movie = await moviesModel.findOne({id:args.id}, {createdAt:0, updatedAt:0, __v:0, _id:0})
                console.log(movie)
                return movie;
                
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