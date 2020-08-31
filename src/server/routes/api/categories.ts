import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const categories = await db.categories.all();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

export default router;