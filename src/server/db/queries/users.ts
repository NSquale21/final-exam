import { Query } from '../';
import type { MySQLResponse, TUsers } from '../models';

const insert = (newUser: any) => Query<MySQLResponse>('INSERT INTO users SET ?', newUser);

const find = (col: string, value: any) => Query<TUsers[]>('SELECT * FROM users WHERE ?? = ?', [col, value]);

export default {
    insert,
    find
}