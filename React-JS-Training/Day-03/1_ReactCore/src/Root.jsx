import React from "react";
import ParentComponent from "./1_LifeCycle";

class Root extends React.Component {
    render() {
        return <div>
            <h1 className="text-danger">Hello There from Root</h1>
            <ParentComponent/>
        </div>;
    }
}

export default Root;