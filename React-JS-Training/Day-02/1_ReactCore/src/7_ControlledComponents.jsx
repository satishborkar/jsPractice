import React, { Component } from "react";

class ControlledComponent extends Component {
    constructor() {
        super();
        this.state = { name: "Manish" };
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleClick(e){
        this.setState({ name: this.refs.t1.value });
    }

    render() {
        return <div>
            <input type="text" value="Manish" readOnly />
            <br />
            <input type="text" value={this.state.name} readOnly />
            <br />
            <input type="text" value={this.state.name}
                onChange={this.handleChange.bind(this)} />
            <br/>
            <input type="text"/>
            <br/>
            <input ref="t1" type="text" defaultValue={this.state.name}/>
            <br/>
            <button onClick={this.handleClick.bind(this)}>Click</button>
        </div>;
    }
}

export default ControlledComponent;