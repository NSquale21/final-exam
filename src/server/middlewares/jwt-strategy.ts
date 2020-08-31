import * as passport from 'passport';
import * as passportJwt from 'passport-jwt';
import type { IPayload } from '../utils/types';
import config from '../config';
import db from '../db/index';

passport.use(new passportJwt.Strategy({ 
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secret
}, async (payload: IPayload, done) => {
    try {
        const [user] = await db.users.find('id', payload.userid);
        if (user) {
            delete user.password;
            done(null, user);
        } else {
           done(null, false); 
        }
    } catch (error) {
        done(error);
    }
}));