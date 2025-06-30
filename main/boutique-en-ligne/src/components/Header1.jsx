import React from 'react';
import { Link } from 'react-router-dom';

const Header1 = () => {
    return (
        <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
                COUCOU
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/checkout" className="text-gray-700 hover:text-blue-600 font-medium transition">Paiement</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header1;