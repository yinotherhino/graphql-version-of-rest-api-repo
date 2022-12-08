
import mongoose from 'mongoose'
import {config} from 'dotenv'
import {ApolloServer} from 'apollo-server'
import resolvers from './Graphql';
import typeDefs from './Graphql/type-defs';

const port = 5050;
config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.URI!, ()=>{
    console.log("Database connected")
});

const server = new ApolloServer({
    typeDefs, resolvers
});

// server.use(logger("dev"));

server.listen( port, ()=> {
    console.log(`Server started on port ${port}`);
} )