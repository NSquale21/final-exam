import * as React from 'react';
import { IBook } from '../utils/interfaces';
import { api } from '../utils/api-service';
import AdminCard from '../components/AdminCard';
import Row from 'react-bootstrap/Row';

const Admin: React.FC<IAdminProps> = () => {
    
    const [books, setBooks] = React.useState<IBook[]>([]);

    React.useEffect(() => {
        ( async () => {
            const books = await api('/api/books');
            setBooks(books);
        })();
    });
    
    return (
        <main>
            <Row className="justify-content-center">
                {books.map(book => <AdminCard key={`admincard-${book.id}`} book={book} />)}
            </Row>
        </main>
    );
};

interface IAdminProps {}

export default Admin;