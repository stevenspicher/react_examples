import React, {useState, useEffect } from 'react';


const Wrapper = () => {
    const [count, setCount] = useState(0);
    const updateCount = () => setCount(count + 1);

    return (
        <div>
            <button onClick={updateCount}>{count}</button>
            <Example />
        </div>
    )
};

const Example = () => {
    useEffect(() => {
        console.log('render');
    });

    return <div />;
};

export default Wrapper 