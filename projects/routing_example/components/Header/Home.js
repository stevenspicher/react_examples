import React from 'react';

import { useHistory } from "react-router-dom";
const Home = ({location}) => {
  const history = useHistory();
    return (
        <>
            <p className="sidebar">Welcome to this site </p>
            <p> You were redirected from {location.state.from}</p>
        </>
    );
}

export default Home