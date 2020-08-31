import { Router } from 'express';
import * as passport from 'passport';

const router = Router();

router.get('/verify', passport.authenticate('jwt'), async (req, res) => res.sendStatus(200));

export default router;