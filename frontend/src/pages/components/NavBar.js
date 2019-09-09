import React from 'react';
import api from '../../services/api';

import { logout } from '../../services/auth';

export default function NavBar({ history }) {

    async function handleLogout() {
        const { data } = await api.get('/logout');
        logout();
        history.push('/', data);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand">MyApp</span>
            
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleLogout}>Logout</button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <span className="nav-link">Home</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Link</span>
                </li>
                </ul>
            </div>
        </nav>
    );
}