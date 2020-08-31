import * as React from 'react';
import { IBook } from '../utils/interfaces';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Template: React.FC<TemplateProps> = props => {
    return (
        <Col md={6}>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Subtitle>{props.book.author}</Card.Subtitle>
                    <Card.Text>${props.book.price}</Card.Text>
                </Card.Body>
                <Card.Footer><Badge variant="primary">{props.book.category}</Badge></Card.Footer>
            </Card>
        </Col>
    );
};

interface TemplateProps {
    book: IBook;
}

export default Template;