import React, { useState } from 'react';

function LoginForm() {
    const [form, setState] = useState({
      username: '',
      password: ''
    });
  
    const printValues = e => {
      e.preventDefault();
      console.log("login from: " + form.username + " with password: " +  form.password);
    };
  
    const updateField = e => {
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    };
  
    return (
      <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={form.username}
            name="username"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    );
  }

  export default LoginForm