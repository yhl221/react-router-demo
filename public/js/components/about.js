import React, {Component} from "react";
import {Link} from "react-router"


class About extends Component{
    render(){
        return <div>
            <h1>About</h1>
            <ul>
                <li><Link to="/">App</Link></li>
            </ul>
        </div>
    }
}

export default About;