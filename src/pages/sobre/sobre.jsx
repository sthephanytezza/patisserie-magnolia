import React from 'react';
import './sobre.css';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import imagem3 from '../../assets/imgs/imagem3.jpg';

export default () =>
    <>
       <Header></Header>,
       <section id="sobre">
            <h1>HISTÓRIA DA PÂTISSERIE MAGNÓLIA</h1>
            <div class="conteudo">
                <div class="texto">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt lacinia eros, ut faucibus risus volutpat pretium. Praesent metus ipsum, pulvinar vel lobortis sed, fermentum et nunc. Mauris ut vehicula nibh. Fusce varius vehicula leo, in auctor lacus condimentum id. Morbi efficitur quis sem tempus scelerisque. Quisque et lobortis urna. Curabitur eget pellentesque leo, eu placerat tellus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt lacinia eros, ut faucibus risus volutpat pretium. Praesent metus ipsum, pulvinar vel lobortis sed, fermentum et nunc. Mauris ut vehicula nibh. Fusce varius vehicula leo, in auctor lacus condimentum id. Morbi efficitur quis sem tempus scelerisque. Quisque et lobortis urna. Curabitur eget pellentesque leo, eu placerat tellus.
                    </p>
                </div>
                <div class="imagem">
                    <img src={imagem3} /> 
                </div>
            </div>
        </section>,
        <Footer></Footer>   
    </>