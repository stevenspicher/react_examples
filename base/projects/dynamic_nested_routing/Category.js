import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Item = () => {
  const { name } = useParams();
  console.log(useParams())

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

const Category = () => {
  const { url, path } = useRouteMatch();
  console.log(useRouteMatch())
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  );
};

export default Category;