import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

import books from './queries/books';
import categories from './queries/categories';
import tokens from './queries/tokens';
import users from './queries/users';

export default {
    books,
    categories,
    tokens,
    users
}