import * as React from 'react';
import LoginForm from '../components/LoginForm';
import Row from 'react-bootstrap/Row';

const Login: React.FC<ILoginProps> = () => {
    return (
        <main>
            <Row className="justify-content-center">
                <LoginForm />
            </Row>
        </main>
    );
};

interface ILoginProps {}

export default Login;