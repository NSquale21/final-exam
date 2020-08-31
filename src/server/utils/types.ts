import type { TUsers } from "../db/models";
import { Request } from 'express';

export interface IPayload {
    userid?: number;
    uniq?: string;
    id?: number;
}

export interface ReqUser extends Request {
    user: TUsers;
}