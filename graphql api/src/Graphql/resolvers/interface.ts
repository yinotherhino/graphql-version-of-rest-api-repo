export interface Movie {
    title:string;
    image:string;
    addedBy:string;
    price:string;
    description:string;
}

export interface CreateMovie{
    input:Movie
}