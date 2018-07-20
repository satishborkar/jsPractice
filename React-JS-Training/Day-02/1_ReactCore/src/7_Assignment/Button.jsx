import React, { Component } from "react";

class Button extends Component {
    localClick(){
        this.props.handleClick(this.props.incBy);
    }
    
    render() {
        return <button onClick={this.localClick.bind(this)} className="btn btn-success">Inc {this.props.incBy}</button>;
    }
}

export default Button;