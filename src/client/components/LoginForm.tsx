import * as React from 'react';
import { api } from '../utils/api-service';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const LoginForm: React.FC<ILoginFormProps> = () => {
    
    const history = useHistory();
    
    const [values, setValues] = React.useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        e.persist();
        setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = await api('/auth/login', 'POST', values);
        localStorage.setItem('token', data);
        history.push('/admin');
    };
    
    return (
        <Col md={7}>
            <Form className="p-3 shadow-sm border rounded">
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
                <Button variant="outline-primary "onClick={handleLogin} type="submit" className="w-75 mx-auto shadow-sm" block>Submit</Button>
            </Form>
        </Col>
    );
};

interface ILoginFormProps {}

export default LoginForm;