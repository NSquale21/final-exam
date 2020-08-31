import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json('TEST LOGIN');
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

export default router;