import * as React from 'react';
import { api } from '../utils/api-service';
import { IBook } from '../utils/interfaces';
import BookCard from '../components/BookCard';
import Row from 'react-bootstrap/Row';

const Books: React.FC<IBooksProps> = () => {
    
    const [books, setBooks] = React.useState<IBook[]>([]);

    React.useEffect(() => {
        (async () => {
            const books = await api('/api/books');
            setBooks(books);
        })();
    }, []);
    
    return (
        <main>
            <Row className="justify-content-center">
                {books.map(book => <BookCard book={book} key={`book-${book.id}`} />)}
            </Row>
        </main>
    );
};

interface IBooksProps {}

export default Books;