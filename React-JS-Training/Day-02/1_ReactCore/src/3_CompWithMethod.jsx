import React, { Component } from "react";

class Button extends Component {
    handleClick() {
        alert("Button Clicked....");
    }

    render() {
        return <div>
            <button className="btn btn-success" onClick={this.handleClick}>Click Me</button>
            
            <button className="btn btn-success" onClick={function () {
                alert("Button Clicked - Anonymous Functions");
            }}>Click Me</button>
            
            <button className="btn btn-success" onClick={() => {
                alert("Button Clicked - Arrow Functions");
            }}>Click Me</button>
        </div >;
    }
}

export default Button;