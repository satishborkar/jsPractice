import React, { Component } from 'react';
import {addListItem} from '../actions/TodoActions.jsx';

const styleRequired = {
    color: 'red'
}

class AddListItem extends Component {

    handleSubmitEvent(event) {
        event.preventDefault();

        var item = {
            id: Math.floor(Math.random() * 100),
            date: "28/12/2017",
            name: this.refs.name.value.trim(),
            desc: this.refs.description.value.trim(),
            quantity: this.refs.quantity.value
        }
        //console.log(item);
        addListItem(item);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitEvent.bind(this)}>
                <h3 className="page-header">Add New Item</h3>

                <div className="form-group">
                    <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
                    <input type="text" className="form-control" id="listItemName" placeholder="Enter name" required ref="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="listItemDescription">Description</label>
                    <textarea className="form-control" rows="3" id="listItemDescription" placeholder="Enter description" ref="description"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="listItemQuantity">Quantity <span style={styleRequired}>*</span></label>
                    <div className="row">
                        <div className="col-xs-5 col-sm-6 col-md-4">
                            <input type="number" min="1" max="9999" step="1" defaultValue="1" className="form-control" id="listItemQuantity" required ref="quantity" />
                        </div>
                    </div>
                </div>

                <hr />

                <button type="submit" className="btn btn-primary">Add to list</button>
                <button type="reset" className="btn btn-link">Cancel</button>
            </form>
        )
    }
}

export default AddListItem;

