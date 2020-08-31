import * as React from 'react';
import EditForm from '../components/EditForm';
import Row from 'react-bootstrap/Row';

const Template: React.FC<TemplateProps> = () => {
    return (
        <main>
            <Row className="justify-content-center">
                <EditForm />
            </Row>
        </main>
    );
};

interface TemplateProps {}

export default Template;