import React, {Component} from "react";

class Result extends Component{
    render(){
        return <div className="row">
            <h2 className="text-success">Result: {this.props.count}</h2>
        </div>;
    }
}

export default Result;