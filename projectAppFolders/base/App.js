import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./Category";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Switch>
  <Route exact path="/"><Home /></Route>
  <Route path="/category"><Category /></Route>
  <Route path="/products"><Products /></Route>
  <Route path="/:id">
    <p>This text will render for any route other than those defined above</p>
  </Route>
</Switch>
    </div>
  );
}
