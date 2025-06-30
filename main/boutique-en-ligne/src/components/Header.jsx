import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Ma Boutique</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Paiement</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;