import React, { Component } from 'react';
import List from './List.jsx';
import AddListItem from './AddListItem.jsx';

class ShoppingList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [
                { id: 1, date: "27/12/2017", name: 'Prashant Dahiwadekar', desc: 'JS Dev', quantity: 1 },
                { id: 2, date: "27/12/2017", name: 'Satish Borkar', desc: 'UI Dev', quantity: 2 },
                { id: 3, date: "27/12/2017", name: 'Rahul Pansare', desc: 'FullStack Dev', quantity: 3 },
                { id: 4, date: "27/12/2017", name: 'Sajid Bhaig', desc: 'Java Dev', quantity: 4 }
            ]
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">

                        <List initData={this.state.list} />

                    </div>
                    <div className="col-sm-6">

                        <AddListItem updateList = {this.updateList} />

                    </div>
                </div>
            </div>
        )
    }
};

export default ShoppingList;