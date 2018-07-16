import React, { Component } from "react";

class ButtonWithState extends Component {
    constructor() {
        super();
        this.state = { text: "Click Me _ Using State" };
    }

    handleClick() {
        alert("Button Clicked....");
    }

    render() {
        return <div>
            <button className="btn btn-success"
                onClick={this.handleClick}>{this.state.text}</button>
        </div >;
    }
}

export default ButtonWithState;