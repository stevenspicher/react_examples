import store from './store';
import React, { useState } from 'react'

const TodoListFunctional = () => {
    const [initialValue, setInitialValue] = useState("Enter something");
    const [todos, setTodos] = useState([
        'Walk the dog 2:00',
        'Go to gym 4:00',
        'Watch movie 9:00',
    ]);

    const inputHandler = (e) => {
        setInitialValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, initialValue]);
        setInitialValue('');
    };

    const deleteHandler = (index) => {
        const allTodos = [...todos];
        allTodos.splice(index, 1);
        setTodos(allTodos);
    };

    return (
        <>
            <h1>Functional Component version of first lecture</h1>
            <form onSubmit={submitHandler}> {/* First component */}
                <input placeholder={initialValue} value={initialValue} onChange={inputHandler} />
                <button type="submit">Add</button>
            </form> {/* First component */}
            <ul> {/* Second component */}
                {todos.map((todo, index) => {
                    return (
                        <li
                            onClick={() => deleteHandler(index)}
                            key={index}
                        >{todo}</li>
                    )
                })}
            </ul> {/* Second component */}
        </>
    );
};

export default TodoListFunctional;