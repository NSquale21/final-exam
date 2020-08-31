import { Router } from 'express';
import { createToken } from '../../utils/tokens';
import type { ReqUser } from '../../utils/types';
import * as passport from 'passport';

const router = Router();

router.post('/', passport.authenticate('local'), async (req: ReqUser, res) => {
    const userid = req.user.id;
    try {
        const token = await createToken({ userid });
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

export default router;