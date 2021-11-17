import React, { Component } from 'react'
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
    };


    render() {
        return (
            <>
                <div>
                    <h1>Class Component with redux started</h1>
                    <input
                        placeholder={this.state.inputValue}
                        value={this.state.inputValue}
                        onChange={this.changeInputValue}
                    />
                    <button>Add</button>
                </div>
                {this.state.list.map((item, index) => {
                    return (
                        <li
                            key={index}
                        >{item}</li>
                    );
                })}
            </>
        );
    };

    changeInputValue(e) {
        // Use action creator to create action.
        const action = {
            type: 'CHANGE_INPUT', // We must have a type.
            value: e.target.value,
        }
        // 2. Dispatch action
        store.dispatch(action);
    }
};

export default TodoList;