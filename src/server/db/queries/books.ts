import { Query } from '../';

const all = () => Query('SELECT books.*, categories.name as category FROM books JOIN categories on categories.id = books.categoryid');

const one = (id: number) => Query('SELECT books.*, categories.name as category FROM books JOIN categories on categories.id = books.categoryid WHERE books.id = ?', [id]);

const insert = (newBook: any) => Query('INSERT INTO books SET ?', newBook);

const update = (updatedBook: any, id: number) => Query('UPDATE books SET ? WHERE id = ?', [updatedBook, id]);

const destroy = (id: number) => Query('DELETE FROM books WHERE id = ?', [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}