import React, { Component } from "react";

class ButtonWithStateChange extends Component {
    constructor() {
        super();
        this.state = { id: 1, count: 0 };
    }

    handleClick() {
        // console.log(this.state.count);
        this.setState({ count: this.state.count + 1 });
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
    }

    render() {
        console.log("Render Called " + this.state.count + " " +this.state.id);
        return <div>
            <h3>Count: {this.state.count}</h3>
            <button className="btn btn-success"
                onClick={this.handleClick.bind(this)}>Click 1</button>
        </div >;
    }
}

export default ButtonWithStateChange;