import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import { comparePasswords } from '../utils/passwords';
// import db from '../db/index';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({usernameField: 'email'}, async (email, password, done) => {
    try {
        // const [user] = await db.users.find('email', email);
        // if (user && comparePasswords(password, user.password)) {
        //     delete user.password;
        //     done(null, user);
        // } else {
        //    done(null, false); 
        // }
    } catch (error) {
        // done(error);
    }
}));