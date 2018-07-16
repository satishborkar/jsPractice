import React, { Component } from "react";

class DPComponent extends Component {
    render() {
        var myStyle = {
            color: this.props.fColor,
            backgroundColor: this.props.bColor
        };

        return <p style={myStyle}>{this.props.content}</p>;
    }

    // static get defaultProps() {
    //     return {
    //         fColor: "white",
    //         bColor: "green"
    //     };
    // }
}

DPComponent.defaultProps = {
    fColor: "white",
    bColor: "green"
};

export default DPComponent;