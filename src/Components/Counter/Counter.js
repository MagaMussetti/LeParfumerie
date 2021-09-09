import { useState } from 'react';

const Counter = (props) => {
    const [counti, setCount] = useState(0);
    return (
        <div>
            <h1>{counti}</h1>
            <button onClick={() => setCount(counti - 1)}>-</button>
            <button onClick={() => setCount(counti + 1)}>+</button>
        </div>
    );
};

export default Counter;
