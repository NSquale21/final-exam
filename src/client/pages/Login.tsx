import * as React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC<ILoginProps> = () => {
    return (
        <main>
            <LoginForm />
        </main>
    );
};

interface ILoginProps {}

export default Login;