export interface TBooks {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
}

export interface TCategories {
    id?: number;
    name?: string;
}

export interface TUsers {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
    name?: string;
}

export interface MySQLResponse {
    fieldCount?: number;
    affectedRows?: number;
    insertId?: number;
    serverStatus?: number;
    warningCount?: number;
    message?: string;
    protocol41?: boolean;
    changedRows?: number;
}