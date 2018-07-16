import React, { Component } from "react";

class ListComponent extends Component {
    render() {
        // for(var key in this.props.items[0]){
        //     console.log(key + "\t" + this.props.items[0][key]);
        // }
        var lItems = this.props.items.map(function(item, index){
            return <li key={item.id}>{item.name}</li>;
        })
        return <div>
            <ul className="list-group">{lItems}</ul>
        </div>;
    }
}

export default ListComponent;