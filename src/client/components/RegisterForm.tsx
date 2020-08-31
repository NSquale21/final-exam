import * as React from 'react';
import { api } from '../utils/api-service';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const RegisterForm: React.FC<IRegisterFormProps> = () => {
    
    const history = useHistory();
    
    const [values, setValues] = React.useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        e.persist();
        setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = await api('/auth/register', 'POST', values);
        localStorage.setItem('token', data);
        history.push('/admin');
    };
    
    return (
        <Col md={7}>
            <Form className="p-3 shadow-sm border rounded">
                <Form.Group>
                    <Form.Control 
                        value={values.name || ''}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Enter name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        value={values.email || ''}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        value={values.password || ''}
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Enter password"
                    />
                </Form.Group>
                <Button variant="outline-primary "onClick={handleRegister} type="submit" className="w-75 mx-auto shadow-sm" block>Submit</Button>
            </Form>
        </Col>
    );
};

interface IRegisterFormProps {}

export default RegisterForm;