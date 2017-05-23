import React, {Component} from "react";
import {Link} from "react-router"

class Inbox extends Component {
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
                <ul>
                    <li><Link to="/">App</Link></li>
                    <li><Link to="/inbox/message">Message</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default Inbox;