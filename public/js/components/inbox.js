import React, {Component} from "react";
import {Link} from "react-router";
import { browserHistory} from 'react-router';


class Inbox extends Component {
    Logout(){
        browserHistory.push('/');    //该方法可用于表单跳转和点击按钮跳转
    }

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
                <button onClick={this.Logout.bind(this)}>退出</button>
            </div>
        )
    }
}

export default Inbox;