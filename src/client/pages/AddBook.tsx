import * as React from 'react';
import AddBookForm from '../components/AddBookForm';
import Row from 'react-bootstrap/Row';

const AddBook: React.FC<IAddBookProps> = () => {
    return (
        <main>
            <Row className="justify-content-center">
                <AddBookForm />
            </Row>
        </main>
    );
};

interface IAddBookProps {}

export default AddBook;