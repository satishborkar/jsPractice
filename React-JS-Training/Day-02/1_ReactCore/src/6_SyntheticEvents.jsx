import React, { Component } from "react";

class EventComponent extends Component {
    constructor() {
        super();
        this.click3 = this.click3.bind(this);
        this.click5 = this.click5.bind(this, "Ramakant");
    }

    click1(e) {
        console.log(e);
        alert("Clicked....");
        e.preventDefault();
    }

    click2(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
    }

    click3(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
    }

    click4(name, e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        console.log(name);
    }

    click5(name, e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        console.log(name);
    }

    // Syntax Error
    // click8 = (e) => {
    //     console.log(e);
    //     console.log(this);
    // }

    render() {
        return <div>
            <h3>Event Handling Demo</h3>
            <a href="http://www.google.com" onClick={this.click1}>Click One</a>
            <br />
            <a href="http://www.google.com" onClick={this.click2.bind(this)}>Click Two</a>
            <br />
            <a href="http://www.google.com" onClick={this.click3}>Click Three</a>
            <br />
            <button 
                onClick={this.click4.bind(this, "Manish")}>Click Four</button>
            <br />
            <button 
                onClick={this.click5}>Click Five</button>
            <br />
            <button
                onClick={(function (e) {
                    console.log(e);
                    console.log(this);
                }).bind(this)}>Click Six - Anonymous Functions</button>
            <br />
            <button
                onClick={(e) => {
                    console.log(e);
                    console.log(this);
                }}>Click Seven - Arrow Functions</button>
            <br/>
            {/* <button
                onClick={this.click8}>Click Eight - Arrow Function in Class</button> */}
        </div >;
    }
}

export default EventComponent;