export interface ITodo { 
    title: string
    id: number
    completed: boolean
}


export interface IProduct { 
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number; };
}