import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;

import Principal from './pages/principal/principal';
import Galeria from './pages/galeria/galeria';
import Sobre from './pages/sobre/sobre';

export default () =>
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/#orcamento" exact component={Principal} />
                <Route path="/galeria" exact component={Galeria} />
                <Route path="/sobre" exact component={Sobre} />
            </Switch>
        </BrowserRouter>
    </>
