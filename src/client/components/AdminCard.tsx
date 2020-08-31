import * as React from 'react';
import type { IBook } from '../utils/interfaces';
import { api } from '../utils/api-service';
import { useHistory, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Template: React.FC<TemplateProps> = props => {

    const history = useHistory();
    
    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await api(`/api/books/${props.book.id}`);
        history.push('/books');
    };
    
    return (
        <Col md={7}>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Subtitle>{props.book.author}</Card.Subtitle>
                    <Button onClick={handleEdit} variant="outline-primary">Delete</Button>
                    <Link to={`/books/edit/${props.book.id}`} className="btn btn-outline-primary">Edit</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

interface TemplateProps {
    book: IBook;
}

export default Template;