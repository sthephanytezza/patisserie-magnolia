import React from 'react';
import './header.css';

import logo from '../assets/logo.png';

export default () =>
    <>
        <header className="mainHeader" id="home">
            <img src={logo} />
            <nav>
                <a href="/">Home</a>
                <a href="/#orcamento">Orçamentos</a>
                <a href="/galeria">Trabalhos realizados</a>
                <a href="/sobre">Sobre nós</a>
            </nav>
        </header>
    </>