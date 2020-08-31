import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [book] = await db.books.one(id);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await db.books.all();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

router.post('/', passport.authenticate('jwt'), async (req, res) => {
    const newBook = req.body;
    try {
        const results = await db.books.insert(newBook);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

router.put('/:id', passport.authenticate('jwt'), async (req, res) => {
    const updatedBook = req.body;
    const id = Number(req.params.id);
    try {
        const results = await db.books.update(updatedBook, id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

router.delete('/:id', passport.authenticate('jwt'), async (req, res) => {
    const id = Number(req.params.id);
    try {
        const results = await db.books.destroy(id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Uh Oh!', error});
    }
});

export default router;