import movieResolver from "./resolvers/movies";
import usersResolver from "./resolvers/users";


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