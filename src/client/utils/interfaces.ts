export interface IBook {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
    category?: string;
}

export interface ICategory {
    id?: number;
    name?: string;
}