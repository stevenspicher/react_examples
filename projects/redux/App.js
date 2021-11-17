import React from 'react';

import './App.css';
import TodoListClassRedux from './components/TodoListClassRedux';
import TodoListFunctional from './components/TodoListFunctional';

function App() {
  return (
    <div className="App">
       <TodoListFunctional />
       
       <TodoListClassRedux />
     
     
    </div>
  );
}

export default App;
