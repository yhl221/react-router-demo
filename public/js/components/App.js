import React, {Component} from "react";
import {Link} from 'react-router';
import Home from "./home";

class App extends Component {

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>

        )
    }
}

export default App;
