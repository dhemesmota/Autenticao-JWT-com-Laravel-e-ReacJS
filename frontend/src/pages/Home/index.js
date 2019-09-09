import React, { useEffect, useState, Fragment } from 'react';
import api from '../../services/api';
import { logout } from '../../services/auth';

import NavBar from '../components/NavBar';

export default function Home({ history}) {

    const [ name, setName ] = useState('');

    async function handleUser() {
        try {
            const response = await api.get('/user');
            const { user } = response.data;
            setName(user.name);
            //console.log(user.name);
        } catch(err) {
            //console.log(err.response.status);
            logout();
        }
    }

    useEffect(() => {
        document.title = "Home | My App";

        handleUser();
    },[]);

    return(
        <Fragment>
            <NavBar history={history} />
            <div className="container-fluid">
                {name && <p className="text-right my-3 text-secondary">{name}</p>}
                <h5>Usuários</h5>
            </div>
        </Fragment>
    );
}