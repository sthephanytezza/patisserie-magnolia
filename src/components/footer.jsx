import React from 'react';
import './footer.css';

import logo from '../assets/logo.png';

export default () =>
    <>
       <footer className="mainFooter">
            <div className="coluna">
                <div className="empresa">
                    <img src={logo} />
                    <p>
                        Copyright &#169; 2020 Pâtisserie Magnólia<br/>
                        All rights reserved.
                    </p>
                </div>
            </div>
            <div className="coluna" id="links">
                <p><a href="/">Home</a></p>
                <p><a href="/#orcamento">Orçamentos</a></p>
                <p><a href="/galeria">Trabalhos realizados</a></p>
                <p><a href="/sobre">Sobre nós</a></p>
            </div>
            <div className="coluna">
                <p>CONTATO:</p>
                <p>Telefone:(31)99499-4558</p>
                <p>Email:patisserie@magnolia.com</p>
            </div>
        </footer>
    </>