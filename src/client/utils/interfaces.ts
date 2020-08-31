export interface IBook {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
    name?: string;
}

export interface ICategory {
    id?: number;
    name?: string;
}