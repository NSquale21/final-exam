import * as React from 'react';
import Row from 'react-bootstrap/Row';

const Home: React.FC<IHomeProps> = () => {
    return (
        <main>
            <Row className="justify-content-center">
                <h1>Hi, welcome to my bookstore!</h1>
            </Row>
        </main>
    );
}

interface IHomeProps {};

export default Home;