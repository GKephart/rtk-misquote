import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Provider from 'react-redux/lib/components/Provider'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { FourOhFour } from './ui/four-oh-four/FourOhFour'
import { Home } from './ui/home/Home'
import { DetailedMisquote } from './ui/misquote/DetailedMisquote'

function Routing (store) {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/misquote/:misquoteId" component={DetailedMisquote} misquoteId=":misquoteId" />
            <Route exact path="/" component={Home}/>
            <Route component={FourOhFour}/>
          </Switch>
        </BrowserRouter>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

