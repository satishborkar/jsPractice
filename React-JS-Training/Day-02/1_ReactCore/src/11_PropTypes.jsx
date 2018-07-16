import React, { Component } from "react";
import PropTypes from "prop-types";

class PTComponent extends Component {
    render() {
        return <div>
            <h3>Hello time is: {this.props.now}</h3>
            <h3>Age is: {this.props.age}</h3>
        </div>
    }
}

PTComponent.displayName = "PropTypesComponent";

PTComponent.propTypes = {
    now: PropTypes.string.isRequired,
    age: function (props, propName, componentName) {
        if (props[propName] < 30) {
            return new Error(componentName + " ----------- " + propName + ", must be greater than 30");
        }
    }
}

export default PTComponent;