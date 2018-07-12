import React, { Component } from 'react';

class List extends Component {

    constructor(props) {
        super(props),
            this.state = {
                list: this.props.initData
            }
    }

    render() {
        const list = this.state.list
        return (
            <div>
                <h3 className="page-header">List Of TODO</h3>
                <ul className="list-item">
                    {list.length > 0 ?
                        list.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div> {item.id} </div>
                                    <div> {item.date} </div>
                                    <div> {item.name} </div>
                                    <div> {item.desc} </div>
                                    <div> {item.quantity} </div>
                                </li>
                            )
                        })
                        : <li> No record found! </li>}
                </ul>
            </div>
        )
    }
};

export default List;