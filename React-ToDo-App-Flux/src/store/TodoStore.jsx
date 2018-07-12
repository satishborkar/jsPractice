import Dispatcher from '../dispatcher/dispatcher.jsx';
import { EventEmitter } from 'events';

class TodoListStore extends EventEmitter {

    constructor(props) {
        super(props);
        this.state = {
            list = {}
        }
    }

    addListItem(item) {

        console.log(item);
        // const { List } = this.state;
        // List[item.id] = item;
        // TodoListStore.emit('change');
    }

    getAll() {
        return this.state.list
    }

    addChangeListener(changeEventHandler) {
        this.on('change', changeEventHandler)
    }

    removeChangeListener(changeEventHandler) {
        this.removeListener('change', changeEventHandler)
    }

    HandleActions(action) {
        console.log(action);
        switch (action.type) {
            case "ADD_ITEM":
                addListItem(action.item)
                break;
        }
    }

};

todoListStore = new TodoListStore;

TodoListStore.dispatchToken = Dispatcher.register(TodoListStore.HandleActions.bind(todoListStore));

module.exports = todoListStore;