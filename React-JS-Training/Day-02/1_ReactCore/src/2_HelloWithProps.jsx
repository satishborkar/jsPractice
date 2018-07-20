import React, { Component } from "react";

class HelloProps extends Component {
    // constructor() {
    //     super();
    //     console.log("Ctor " + this.props);
    // }

    constructor(p) {
        super(p);
        console.log("Ctor " + this.props.fname + " " + this.props.lname);
    }

    render() {
        return <h2>Hello {this.props.fname} {this.props.lname}</h2>;
    }
}

export default HelloProps;