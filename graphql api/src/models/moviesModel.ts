import mongoose, { Schema } from "mongoose";

export interface moviesInstance {
    id: string;
    title:string;
    image:string;
    description:string;
    price:string;
	addedBy:string;
}
const moviesSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
    addedBy: {
        type:String,
        required:true
    },
    id: {
        type:String,
        required:true
    }
},{timestamps:true});

const moviesModel = mongoose.model<moviesInstance>('movies', moviesSchema)

export default moviesModel;
