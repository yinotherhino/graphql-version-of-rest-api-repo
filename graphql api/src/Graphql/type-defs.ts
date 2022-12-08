import {gql} from 'apollo-server'

const typeDefs = gql `
    type User{
        _id:ID!
        email:String!
        username:String!
        password:String
        fullname:String
        salt:String
    }

    type Movie{
        id:ID!
        title:String!
        price:String!
        description:String!
        image:String!
    }

    input createMovie{
        title:String!
        price:String!
        description:String!
        image:String!
        addedBy:String!
    }

    input updateMovie{
        title:String
        price:String
        description:String
        image:String
        addedBy:String
    }

    input createUser{
        email:String!
        username:String!
        password:String!
        fullname:String
    }

    input updateUser{
        email:String
        username:String
        password:String
        fullname:String
    }

    type Message{
        message:String!
    }

    type Query{
        allUsers:[User]!
        singleUser(id:ID!):User
        allMovies:[Movie]!
        singleMovie(id:ID!):Movie
    }

    type Mutation{
        createUser(input:createUser):User!
        updateUser(input:updateUser):User!
        deleteUser(id:ID!):Message!
        createMovie(input:createMovie):Movie!
        updateMovie(input:updateMovie):Movie!
        deleteMovie(id:ID!):Message!
    }

`
export default typeDefs;