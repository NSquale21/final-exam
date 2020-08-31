import * as React from 'react';
import RegisterForm from '../components/RegisterForm';
import Row from 'react-bootstrap/Row';

const Register: React.FC<IRegisterProps> = () => {
    return (
        <main className="justify-content-center">
            <Row className="justify-content-center">
                <RegisterForm />
            </Row>
        </main>
    );
};

interface IRegisterProps {}

export default Register;