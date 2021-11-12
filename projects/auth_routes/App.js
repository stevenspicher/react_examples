import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";


//Components: 
const Login = ({ history, setName }) => {
  const [inputValue, setValue] = useState('');
  return (
    <form
      onSubmit={event => {
        setName(inputValue);
        history.push("/user");
        event.preventDefault();
      }}
    >
      <label>
        Login:
        <input
          type="text"
          value={inputValue}
          onChange={event => setValue(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
};


const User = ({ name, history }) => (
  <div>
    <h2>Welcome {name}</h2>
    <button onClick={() => history.push("/")}>Home</button>
  </div>
);

const Lock = ({ name, history }) => (
  <div>
    <h2>{name} is Locked Out</h2>
    <button onClick={() => history.push("/")}>Home</button>
  </div>
);


//App

export default function App() {
  const history = useHistory();

  const [name, setName] = useState('');
  const authorizedUserObj = {
    steven: true
  }


  let auth = authorizedUserObj[name]

  return (

    <div>
      <Switch>
        <Route exact path="/"><Login history={history} setName={setName} /></Route>
        <Route path="/user">
        {auth ? <User name={name} history={history} /> : <Redirect to="/lockout" />}
        </Route>
        <Route path="/lockout"><Lock name={name} history={history} /></Route>
      </Switch>
    </div>
  );
}
