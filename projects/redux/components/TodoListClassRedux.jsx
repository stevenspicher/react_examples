import React, { Component } from 'react';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreator';
import TodoListUI from './TodoListUI';

/*
1. Data flow: reducer -> store -> components.

2. Component -> action creator -> store.
*/

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };

    componentDidMount() {
        store.subscribe(this.storeChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                list={this.state.list}
            />
        );
    };

    changeInputValue(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    };

    storeChange() {
        this.setState(store.getState());
    };

    addItem() {
        const action = addItemAction();
        store.dispatch(action);
    };

    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action);
    };
};

export default TodoList;