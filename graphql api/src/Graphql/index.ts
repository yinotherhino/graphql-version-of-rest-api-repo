import movieResolver from "./resolvers/movies";
import usersResolver from "./resolvers/movies";


export default{
    Query:{
        ...movieResolver.Query,
        ...usersResolver.Query
    },
    Mutation:{
        ...movieResolver.Mutation,
        ...usersResolver.Mutation

    }
}