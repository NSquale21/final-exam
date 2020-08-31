import * as React from 'react';
import RegisterForm from '../components/RegisterForm'

const Register: React.FC<IRegisterProps> = () => {
    return (
        <main>
            <RegisterForm />
        </main>
    );
};

interface IRegisterProps {}

export default Register;