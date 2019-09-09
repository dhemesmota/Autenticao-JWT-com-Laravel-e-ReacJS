import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/react.png';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container } from './styles';

export default function SignIn({ history }) {
    const [error, setError] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState('');
    
    useEffect(() => {
        
        const { state } = history.location;
        if(state) {
            setMessages(state.message);
        }

        document.title = "SignIn | My App";
    },[history.location]);

    async function handleSignIn(e) {
        e.preventDefault();
        
        if(!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
            setMessages('');
        } else {
            try {
                const response = await api.post("/login", { email, password });
                login(response.data.token);
                const user = await api.get('/user');
                history.push('/app', user.data.user);
            } catch(err) {
                setError('Houve um problema com o login, verifique suas credenciais.');
                setMessages('');
            }
        }

    }

    return(
        <Container>
            <Form onSubmit={handleSignIn}>
                <img src={Logo} alt="ReactJS" />
                {messages && <span>{messages}</span>}
                {error && <p>{error}</p>}
                <input 
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
                <hr />
                <Link to="/signup">Criar conta grátis</Link>
            </Form>
        </Container>
    );
}