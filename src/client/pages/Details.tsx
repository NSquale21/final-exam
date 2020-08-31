import * as React from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api-service';
import { IBook } from '../utils/interfaces';
import DetailsCard from '../components/DetailsCard';
import Row from 'react-bootstrap/Row';

const Details: React.FC<DetailsProps> = () => {
    
    const { id } = useParams();

    const [book, setBook] = React.useState<IBook>(null);

    React.useEffect(() => {
        (async () => {
            const book = await api(`/api/books/${id}`);
            setBook(book);
        })();
    }, [id]);
    
    return (
        <main>
            <Row className="justify-content-center">
                <DetailsCard book={book} />
            </Row>
        </main>
    );
};

interface DetailsProps {}

export default Details;