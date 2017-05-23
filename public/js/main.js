import React, {Component} from 'react';
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory, Redirect, hashHistory} from 'react-router';
import About from "./components/about";
import App from "./components/App";
import Inbox from "./components/inbox";
import Message from "./components/message";
import Home from "./components/home";
import RedirectPage from "./components/redirect";


render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <IndexRoute components={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/inbox" component={Inbox}>
            <Redirect from="/inbox/message" to="/about"/>
            <Route path="message" component={Message}/>
            <Route path="redirect" component={RedirectPage}/>
        </Route>
    </Router>, document.getElementById('app'));


