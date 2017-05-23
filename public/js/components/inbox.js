import React, {Component} from "react";
import {Link} from "react-router"

class Inbox extends Component{
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
                <ul>
                    <li><Link to="/">App</Link></li>
                </ul>
            </div>
        )
    }
}

export default Inbox;