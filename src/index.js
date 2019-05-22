import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import About from './components/About'
import E404 from './components/E404'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
     <nav className="pa3 pa4-ns">
   <div className="tc pb3">
    <a className="link dim gray f6 f5-ns dib mr3" href="/" title="Home">Home</a>
    <a className="link dim gray f6 f5-ns dib mr3" href="About" title="About">About</a>
    </div>
</nav>
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
