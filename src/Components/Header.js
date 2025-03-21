import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSSdeCadaPagina/header.css';

const Header = () => {
  const location = useLocation();

  return (
    <div className='header'>
      <h1>PlayStation Palace</h1>
      <nav>
        <ul className="listaHeader">
          <li>
            <Link
              to="/"
              className={`linkHeader ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/loja/Play/Station"
              className={`linkHeader ${location.pathname === '/loja/Play/Station' ? 'active' : ''}`}>
              Games
            </Link>
          </li>
          <li>
            <Link
              to="/contato/Play/Station"
              className={`linkHeader ${location.pathname === '/contato/Play/Station' ? 'active' : ''}`}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default Header;