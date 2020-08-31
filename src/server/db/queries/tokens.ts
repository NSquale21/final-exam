import { Query } from '../';
import type { MySQLResponse } from '../models';
import type { IPayload } from '../../utils/types';

const insert = (payload: IPayload) => {
    delete payload.uniq;
    return Query<MySQLResponse>('INSERT INTO tokens SET ?', payload);
}

const update = (token: string, id: number) => Query<MySQLResponse>('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);

export default {
    insert,
    update,
}