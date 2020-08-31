import * as React from 'react';
import type { ICategory } from '../utils/interfaces';
import { useParams, useHistory } from 'react-router-dom';
import { api } from '../utils/api-service';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const EditForm: React.FC<IEditFormProps> = () => {

	const { id } = useParams();
	const history = useHistory();
	
	const [title, setTitle] = React.useState<string>('');
	const [price, setPrice] = React.useState<string>('');
	const [selectedId, setSelectedId] = React.useState<string>('0');
    const [author, setAuthor] = React.useState<string>('');
    const [categories, setCategories] = React.useState<ICategory[]>([]);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
	const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value);
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedId(e.target.value);
	const handleAuthorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setAuthor(e.target.value);

	React.useEffect(() => {
        (async () => {
            const categories = await api('/api/categories');
            setCategories(categories);
        })();
    }, []);

    React.useEffect(() => {
        (async () => {
            const res = await api(`/api/books/${id}`);
            setTitle(res.title);
            setPrice(res.price);
            setAuthor(res.author);
            setSelectedId(res.categoryid);
        })();
    }, [id]);
	
	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const res = await api(`/api/books/${id}`, 'PUT', { title, author, price, categoryid: selectedId });
		history.push(`/books/details/${id}`);
	}

	return (
        <Col md={7}>
            <Form className="p-3 shadow-sm">
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        value={title} 
                        onChange={handleTitleChange} 
                        type="text" 
                        placeholder="Enter title" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        value={author} 
                        onChange={handleAuthorChange} 
                        type="text" 
                        placeholder="Enter author" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Enter price" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        as="select" 
                        value={selectedId} 
                        onChange={handleSelectChange} >
                        <option value="0" disabled>Select Tag</option>
                        {categories.map(category => <option key={`tag-${category.id}`} value={category.id}>{category.name}</option> )}
                    </Form.Control>
                </Form.Group>
                <Button className="w-75 mx-auto" variant="outline-primary" onClick={handleSubmit} block>Submit</Button>
            </Form>
        </Col>
	);
}

export interface IEditFormProps {}

export default EditForm;