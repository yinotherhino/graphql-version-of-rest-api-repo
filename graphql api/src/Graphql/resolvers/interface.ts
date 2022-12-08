export interface Movie {
    id:string;
    title:string;
    image:string;
    addedBy:string;
    price:string;
    description:string;
}

export interface User {
    email:string;
    password:string;
    username:string;
    fullname:string;
}

export interface UpdateUser {
    _id:string;
    email?:string;
    password?:string;
    username?:string;
    fullname?:string;
}

export interface UpdateMovie {
    id:string;
    price:string;
    description:string;
    title:string;
    image:string;
}

export interface CreateMovie{
    input:Movie
}

export interface CreateUser {
    input:User
}

export interface ModifyUser {
    input:UpdateUser
}

export interface ModifyMovie {
    input:UpdateMovie
}