import React, { useState, useEffect } from 'react';
import { createStore } from "redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Principal from './Principal';
import Pergunta from './Pergunta';
import CredenciamentoHeader from '../component/CredenciamentoHeader';

import Crendenciais from '../reducer/Credenciais';
import '../style/Root.css';


export default function Root() {

    const store = createStore(Crendenciais);

    return (
        <Container fluid className="Root">
            <CredenciamentoHeader store={store} />
            <Row>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Principal />
                        </Route>
                        <Route path="/perguntas/:id" children={<Pergunta />} />
                    </Switch>
                </Router>
            </Row>
        </Container>
    )
}
