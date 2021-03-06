import { Router } from 'express';
import { createToken } from '../../utils/tokens';
import { generateHash } from '../../utils/passwords';
import db from '../../db';

const router = Router();

router.post('/', async (req, res) => {
    const newUser = req.body;
    newUser.password = generateHash(newUser.password);
    try {
        const results = await db.users.insert(newUser);
        const token = await createToken({ userid: results.insertId });
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

export default router;