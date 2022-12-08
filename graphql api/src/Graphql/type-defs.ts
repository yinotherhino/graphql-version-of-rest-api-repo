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

    type UpdatedUser{
        _id:ID!
        email:String
        username:String
        password:String
        fullname:String
        salt:String
    }

    type UpdatedMovie{
        id:ID!
        title:String
        price:String
        description:String
        image:String
        addedBy:String
    }

    type Movie{
        id:ID!
        title:String!
        price:String!
        description:String!
        image:String!
    }

    input createMovie{
        id:ID!
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
        _id:ID!
        email:String
        username:String
        password:String
        fullname:String
    }

    input updateMovie{
        id:ID!
        title:String
        description:String
        image:String
        price:String
    }

    type Message{
        message:String!
    }

    type Query{
        allUsers:[User]!
        singleUser(_id:ID!):User
        allMovies:[Movie]!
        singleMovie(id:ID!):Movie
    }

    type Mutation{
        createUser(input:createUser!):User!
        updateUser(input:updateUser!):UpdatedUser!
        deleteUser(_id:ID!):Message!
        createMovie(input:createMovie!):Movie!
        updateMovie(input:updateMovie!):UpdatedMovie!
        deleteMovie(id:ID!):Message!
    }

`
export default typeDefs;