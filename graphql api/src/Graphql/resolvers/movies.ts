import moviesModel, { moviesInstance } from "../../models/moviesModel";
import usersModel from "../../models/usersSchema";
import { CreateMovie, ModifyMovie } from "./interface";


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
                return movie;
                
            } catch (err) {
                console.log(err)
            }
        }
    },

    Mutation:{
        createMovie: async( _:unknown, args:CreateMovie )=>{
            try {
                const newMovie = {
                    id:args.input.id,
                    title:args.input.title,
                    image:args.input.image,
                    description:args.input.description,
                    price:args.input.price,
                    addedBy:args.input.addedBy
                }

                const movie = await moviesModel.create(newMovie);
                if(movie)
                return movie;
            } 
            catch (err) {
                console.log(err)
            }
        },

        deleteMovie: async( _:unknown, args:{id:string} )=>{
            try {
                const {id} = args

                const movie = await moviesModel.deleteOne({id});
                if(movie)
                return {message:"Successfully deleted"};
            } 
            catch (err) {
                console.log(err)
            }
        },

        updateMovie: async( _:unknown, args:ModifyMovie)=>{
            try {
                const {image, title, price, description, id} = args.input
                const data = {image, title, price, description}

                const movie = await moviesModel.updateOne({id}, data);
                if(movie)
                return {...data, id};
            } 
            catch (err) {
                console.log(err)
            }
        }
    }
}

export default ListingResolver;