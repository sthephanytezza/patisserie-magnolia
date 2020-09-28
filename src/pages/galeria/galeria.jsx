import React from 'react';
import './galeria.css';
import './perfundo.min.css';
import './perfundo-icons.css';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


import imagem1 from '../../assets/imgs/imagem1.jpg';
import imagem2 from '../../assets/imgs/imagem2.jpg';
import imagem3 from '../../assets/imgs/imagem3.jpg';
import imagem4 from '../../assets/imgs/imagem4.jpg';
import imagem5 from '../../assets/imgs/imagem5.jpg';
import imagem6 from '../../assets/imgs/imagem6.jpg';
import imagem7 from '../../assets/imgs/imagem7.jpg';
import imagem8 from '../../assets/imgs/imagem8.jpg';
import imagem9 from '../../assets/imgs/imagem9.jpg';

export default () =>
    <>
       <Header></Header>,
       <section id="galeria">
                <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img1">
                      <img src={imagem1} alt="Demo image" />
                    </a>
                    <div id="perfundo-img1" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: ''+ { imagem1 } + ''}}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img2">Next</a>
                    </div>
                  </div>
                  
                  <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img2">
                      <img src={imagem2} alt="Demo image" />
                    </a>
                    <div id="perfundo-img2" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem2 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img3">Next</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img1">Prev</a>
                    </div>
                  </div>
                
                  <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img3">
                      <img src={imagem3} alt="Demo image" />
                    </a>
                    <div id="perfundo-img3" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem3 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img4">Next</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img2">Prev</a>
                    </div>
                  </div>

                <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img4">
                        <img src={imagem4} alt="Demo image" />
                    </a>
                    <div id="perfundo-img4" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem4 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img5">Next</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img3">Prev</a>
                    </div>
                  </div>

                  <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img5">
                        <img src={imagem5} alt="Demo image" />
                    </a>
                    <div id="perfundo-img5" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem5 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img6">Next</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img4">Prev</a>
                    </div>
                  </div>
                
                  <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img6">
                        <img src={imagem6} alt="Demo image" />
                    </a>
                    <div id="perfundo-img6" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem6 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img7">Next</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img5">Prev</a>
                    </div>
                  </div>

                <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img7">
                        <img src={imagem7} alt="Demo image" />
                    </a>
                    <div id="perfundo-img7" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem7 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img8">Next</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img6">Prev</a>
                    </div>
                </div>
                <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img8">
                        <img src={imagem8} alt="Demo image" />
                    </a>
                    <div id="perfundo-img8" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem8 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2>
                      </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__next perfundo__control" href="#perfundo-img9">Next</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img7">Prev</a>
                    </div>
                </div>
                <div className="perfundo">
                    <a className="perfundo__link" href="#perfundo-img9">
                        <img src={imagem9} alt="Demo image" />
                    </a>
                    <div id="perfundo-img9" className="perfundo__overlay fadeIn">
                      <figure className="perfundo__content perfundo__figure">
                        <div className="perfundo__image" style={{width: '800px', marginTop: '66.25%', backgroundImage: 'url(' + { imagem9 } + ')' }}></div>
                        <h1>ESSE É O TÍTULO</h1>
                        <h2>Esse é o subtítulo</h2> 
                     </figure>
                      <a href="#perfundo-untarget" className="perfundo__close perfundo__control">Close</a>
                      <a className="perfundo__prev perfundo__control" href="#perfundo-img8">Prev</a>
                    </div>
                </div>
        </section>,
        <Footer></Footer>      
    </>