import React, {Component} from 'react';

class Message extends Component {
    render() {
        return <div>
            Message {this.props.params.id}
        </div>
    }
}

export default Message;