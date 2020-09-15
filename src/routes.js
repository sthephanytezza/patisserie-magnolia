import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;

import Principal from './principal/principal';
import Galeria from './galeria/galeria';
import Sobre from './sobre/sobre';

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
