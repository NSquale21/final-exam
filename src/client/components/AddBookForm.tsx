import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../utils/api-service';
import type { ICategory } from '../utils/interfaces';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const AddBookForm: React.FC<IAddBookFormProps> = () => {
    
    const history = useHistory();

    const [values, setValues] = React.useState<{ [key: string]: string }>({});
    const [selectedId, setSelectedId] = React.useState<string>('0');
    const [categories, setCategories] = React.useState<ICategory[]>([]);
    
    React.useEffect(() => {
        (async () => {
            const categories = await api('/api/categories');
            setCategories(categories);
        })();
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedId(e.target.value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await api('/api/books', 'POST', { ...values, categoryid: selectedId } );
        history.push('/books');
    };
    
    return (
        <Col md={7}>
            <Form className="border p-3 shadow-sm">
                <Form.Group>
                    <Form.Control 
                        onChange={handleChange}
                        value={values.title || ''}
                        name="title"
                        placeholder="Enter title"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        onChange={handleChange}
                        value={values.author || ''}
                        name="author"
                        placeholder="Enter author"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        onChange={handleChange}
                        value={values.price || ''}
                        name="price"
                        placeholder="$0.00"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="select" 
                        onChange={handleSelectChange}
                        value={selectedId}
                        name="category" >
                        <option value="0" disabled>Select Tag</option>
                        {categories.map(category => <option key={`tag-${category.id}`} value={category.id}>{category.name}</option> )}
                    </Form.Control>
                </Form.Group>
                <Button onClick={handleSubmit} variant="outline-primary" className="w-75 mx-auto" block>Add Book</Button>
            </Form>
        </Col>
    );
};

interface IAddBookFormProps {};

export default AddBookForm;