import React, { useEffect, useState, Fragment } from 'react';
import api from '../../services/api';
import { logout } from '../../services/auth';
import { parseISO, formatRelative } from 'date-fns';
//import { parseISO, format, formatRelative, formatDistance } from 'date-fns';
import {pt} from 'date-fns/locale';

import NavBar from '../components/NavBar';

export default function Home({ history}) {

    const [ users, setUsers ] = useState([]);
    const [user, setUser] = useState([]);

    

    useEffect(() => {
        document.title = "Home | My App";

        async function handleUsers() {

            try {
                const response = await api.get('/users');
                //console.log(response.data);
                setUsers(response.data);

            } catch (error) {
                alert('Sua sessão inspirou! Faça login novamente.');
                logout();
            }

        }
        
        async function handleUser() {

            try {
                const dados = await api.get('/user');
                //console.log(dados.data);
                setUser(dados.data.user);

            } catch(error) {
                alert('Ooops! Ocorreu um erro.')
            }

        }


        handleUsers();
        handleUser();
    },[]);

    return(
        <Fragment>
            <NavBar history={history} username={user.name} />
            <div className="container">
                <h5 className="my-3">Bem vindo(a), {user.name}!</h5>

                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cadastrado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{formatRelative(parseISO(user.created_at), new Date(), {locale: pt})}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h1>
                </h1>
            </div>
        </Fragment>
    );
}
