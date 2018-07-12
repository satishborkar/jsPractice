import Dispatcher from '../dispatcher/Dispatcher.jsx';

function addListItem(item) {
    var action = {
        type: "ADD_ITEM",
        item: item
    }
    Dispatcher.dispatch(action);    
};

module.exports = {
    addListItem: addListItem
}

