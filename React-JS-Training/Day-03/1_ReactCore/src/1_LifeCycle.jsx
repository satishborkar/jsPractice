import React, { Component } from "react";

class ParentComponent extends Component {
    constructor(p) {
        super(p);
        this.state = { data: 0, removeChild: true };
        console.log("Parent - Ctor");
    }

    handleClick(e) {
        this.setState({ data: this.state.data + 1 });
    }

    loadChild(e) {
        var flag = !this.state.removeChild;
        this.setState({ removeChild: flag });
    }

    render() {
        console.log("Parent - Render");

        var child = this.state.removeChild ? null : (
            <Child ref="c1" value={this.state.data} />
        );

        return <div>
            <button onClick={this.handleClick.bind(this)}>Change</button>
            <button onClick={this.loadChild.bind(this)}>Load Child</button>
            {child}
        </div>;
    }
}

class Child extends Component {
    constructor() {
        super();
        console.log("Child - Ctor");
    }

    componentWillMount(){
        console.log("Child - componentWillMount");
    }

    componentDidMount(){
        console.log("Child - componentDidMount");
    }

    render() {
        console.log("Child - Render");
        return <div>
            <h2>Child Component</h2>
            <h3>{this.props.value}</h3>
        </div>
    }

    componentWillReceiveProps(newProps){
        console.log("Child - componentWillRecieveProps")
    }

    shouldComponentUpdate(newProps, newState){
        console.log("Child - shouldComponentUpdate");
        return false;
    }

    componentWillUpdate(){
        console.log("Child - componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Child - componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child - componentWillUnmount");
    }
}

export default ParentComponent;