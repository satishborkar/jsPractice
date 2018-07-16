import React, { Component } from "react";

class Calculator extends Component {
    constructor() {
        super();
        this.state = { result: 0 };
    }

    handleClick(e) {
        this.setState({ result: parseInt(this.refs.t1.value) + parseInt(this.refs.t2.value) });
    }

    render() {
        return <div>
            <div className="form-group">
                <label htmlFor="t1">Number One</label>
                <div className="field">
                    <input type="number" className="form-control" ref="t1" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="t2">Number Two</label>
                <div className="field">
                    <input type="number" className="form-control" ref="t2" />
                </div>
            </div>
            <div className="form-group">
                <h3>Result: {this.state.result}</h3>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block"
                    onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        </div>;
    }
}

export default Calculator;