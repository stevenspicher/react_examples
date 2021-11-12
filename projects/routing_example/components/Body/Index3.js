import React from 'react';
import { useHistory } from "react-router-dom";

const Index3 = ({location}) => {
    const history = useHistory();
    return (
        <>
            <p>index 3</p>

            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </button>

            {/* <p>You were redirected from {location.state.from}</p> */}
        </>
    );
}

export default Index3