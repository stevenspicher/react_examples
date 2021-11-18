import React, { Component } from 'react';

class TodoListUI extends Component {
    render() {
        return (
            <>
                <div className="todo-container">
                    <input
                        placeholder={this.props.inputValue}
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                    />
                    <button
                        onClick={this.props.addItem}
                    >Add</button>
                </div>
                {this.props.list.map((item, index) => {
                    return (
                        <li
                            onClick={() => this.props.deleteItem(index)}
                            key={index}
                        >{item}</li>
                    );
                })}
            </>
        );
    };
};

export default TodoListUI;