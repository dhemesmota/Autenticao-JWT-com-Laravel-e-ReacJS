import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/react.png';

import { Form, Container } from './styles';

import api from '../../services/api';
import { login } from '../../services/auth';

export default function SignUp({ history }) {
    const [name, setName] = useState('');
    const [error, setError] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [password_confirmation, setPasswordConfirmation] = useState(''); 

    useEffect(() => {
        document.title = "SignUp | My App";
    },[]);

    async function hendleSignUp(e) {
        e.preventDefault();
        
        if(!name || !email || !password || !password_confirmation) {
            setError("Preencha todos os dados para se cadastrar");
        } else {
            try {
                const user = await api.post('/register', { name, email, password, password_confirmation });

                login(user.data.token);
                history.push("/app");
            } catch(err) {
                //console.log(err.response);
                setError(`Ocorreu um errro ao registrar sua conta.`);
            }
        }
    }


    return(
        <Container>
            <Form onSubmit={hendleSignUp}>
                <img src={Logo} alt="Airbnb logo" />
                {error && <p>{error}</p>}
                <input 
                    type="text"
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                />
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
                <input 
                    type="password"
                    placeholder="Confirmação de Senha"
                    onChange={e => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/">Fazer login</Link>
            </Form>
        </Container>
    );
}