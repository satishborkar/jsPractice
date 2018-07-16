import React, { Component } from "react";
import Result from "./Result";
import Button from "./Button";

class Incrementer extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        this.updateCounter = this.updateCounter.bind(this);
    }

    updateCounter(by) {
        this.setState({ count: this.state.count + by });
    }

    render() {
        return <div className="row">
            <Result count={this.state.count} />
            <Button incBy={5} handleClick={this.updateCounter} />
            <Button incBy={10} handleClick={this.updateCounter} />
            <Button incBy={15} handleClick={this.updateCounter} />
            <Button incBy={20} handleClick={this.updateCounter} />
        </div>;
    }
}

export default Incrementer;