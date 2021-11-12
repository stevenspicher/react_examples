import React, { useState } from 'react';

const Headline = ({ headline }) => <h1>Welcome from {headline}</h1>;


const Input = ({ value, onChangeInput, children }) => (
    <label>
      {children}
      <input type="text" value={value} onChange={onChangeInput} />
    </label>
  );


  const Form = ({ setTown }) => {
    const [inputValue, setValue] = useState('');
  
    return (
      <form
        onSubmit={event => {
          setTown(inputValue);
   
          // prevents browser from reloading
          // which is the native browser behavior
          // for a form submit
          event.preventDefault();
        }}
      >
        <label>
          Your town:
          <input
            type="text"
            value={inputValue}
            onChange={event => setValue(event.target.value)}
          />
        </label>
   
        <button type="submit">Send</button>
      </form>
    );
  };
  export { Headline , Input, Form}
