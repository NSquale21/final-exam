import * as React from 'react';
import type { IBook } from '../utils/interfaces';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Template: React.FC<TemplateProps> = props => {
    return (
        <Col md={6}>
            <Card className="mb-3 shadow-sm">
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Subtitle>{props.book.author}</Card.Subtitle>
                    <Card.Text>${props.book.price}</Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-center mb-2">
                    <Link to={`books/details/${props.book.id}`} className="btn btn-sm btn-outline-primary">View More Details</Link>
                </div>
                <Card.Footer><Badge variant="primary">{props.book.category}</Badge></Card.Footer>
            </Card>
        </Col>
    );
};

interface TemplateProps {
    book: IBook;
}

export default Template;