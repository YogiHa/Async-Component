import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import About from './components/singlePages/About'
import E404 from './components/singlePages/E404'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';

const routing = (
  <Router>
    <div>
        <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/About" component={About} />
         <Route component={E404} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
