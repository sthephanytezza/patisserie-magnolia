import React from 'react';
import './index.css';

import '../components/header.css';
import '../components/footer.css';
import './formulario.css';
import './slide.css';

import Footer from '../components/footer';
import Header from '../components/header';

import icon from '../assets/donut.png';
import bolomorango from '../assets/bolomorango.png';

import imagem1 from '../assets/imagem1.jpg';
import imagem2 from '../assets/imagem2.jpg';
import imagem3 from '../assets/imagem3.jpg';
import imagem4 from '../assets/imagem4.jpg';

export default () => 
    <>
        <Header></Header>,
        <section id="main">
            <section className="mainInicio" >
                <div className="textoInicio">
                    <img src={icon} />
                    <h1>Pâtisserie Magnólia</h1>
                </div>
                <button type="button" onclick="location.href='galeria.html'">Veja mais</button>
                <a><img src={bolomorango}/></a>
            </section>
            <section className="mainCarrossel">
                <img src={imagem1} />
                <img src={imagem2} />
                <img src={imagem3} />
                <img src={imagem4} />
            </section>
            <section className="mainForm" id="orcamento">
                <form action="#" method="post">
                    <fieldset>
                        <h1>FAÇA UM ORÇAMENTO</h1>
                        <div className="formulario">
                            <div className="campo">
                                <label for="nome">NOME</label>
                                <input type="text" id="nome" name="nome" style={{width: '98%'}} value="" />
                            </div>
                            <div className="campo">
                                <label for="descricao">DESCRIÇÃO</label>
                                <input type="text" id="descricao" name="descricao" style={{width: '98%'}} value="" />
                            </div>
                            <div className="grupo">
                                <div className="campo">
                                    <label for="upload">UPLOAD</label>
                                    <input type="text" id="upload" name="upload" style={{width: '98%'}} value="" />
                                </div>
                                <div className="campo">
                                    <label for="tipo">TIPO</label>
                                    <input type="text" id="tipo" name="tipo" style={{width: '98%'}} value="" />
                                </div>
                            </div>
                            <button type="submit" name="submit" className="botao">ENVIAR</button>
                        </div>
                    </fieldset>
                </form>
            </section>
       </section>,
       <Footer></Footer>
    </>