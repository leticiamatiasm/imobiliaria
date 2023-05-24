import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic or API call here
        console.log('Login submitted:', username, password);
        // Reset the form
        setUsername('');
        setPassword('');
        // Fazer autenticação aqui
        navigate("/QueryScreen");
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <h1 style={{ marginBottom: 10 }}>LOGIN</h1>
                <Form.Group style={{ marginTop: 25 }}>
                    <Form.Label>Nome de usuário</Form.Label>
                    <Form.Control type="text" value={username} onChange={handleUsernameChange} />
                </Form.Group>
                <Form.Group style={{ marginTop: 25 }}>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginTop: 25, width: '300px' }} size="lg">Entrar</Button>
            </Form>
        </Container>
    );
}

export default LoginPage;
