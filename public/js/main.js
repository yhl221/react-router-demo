import React, {Component} from 'react';
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory, Redirect, hashHistory} from 'react-router';
import About from "./components/about";
import App from "./components/App";
import Inbox from "./components/inbox";
import Message from "./components/message";
import Home from "./components/home";


render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute components={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/inbox" component={Inbox}>
                <Route path="message/:id" component={Message}/>
              {/*  <Redirect from="messages/:id" to="/messages/:id"/>*/}
            </Route>
        </Route>
    </Router>, document.getElementById('app'));


