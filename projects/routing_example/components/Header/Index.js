import React from 'react';

import { useHistory } from "react-router-dom";
const Index = () => {
    const history = useHistory();
    console.log(history)
    return (
        <div className="sidebar">
            <p>List of Links</p>
        </div>

    )
}

export default Index