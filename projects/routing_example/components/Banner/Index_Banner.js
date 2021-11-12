import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import React from 'react';

const IndexBanner = () => {
    return (
        <>
        <p>
        <Link to='/index/1'>Page 1 </Link>   
        <Link to='/index/2'>Page 2 </Link> 
        <Link to='/index/3'>Page 3 </Link>
        </p>
        </>
    )
}

export default IndexBanner