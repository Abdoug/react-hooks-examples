import React, { useEffect, useRef, useState } from 'react'

function UseRefCase() {
    const [name, setName] = useState("");
    const lastValue = useRef("");
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(lastValue.current);
        lastValue.current = name;
    })

    const focusOnInput = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} onChange={(e) => setName(e.target.value)}/>
            <p>Current name is: {name} and the last one was: {lastValue.current}</p>
            <button onClick={() => focusOnInput()}>Click Me and i'll focus on the input</button>
        </div>
    )
}

export default UseRefCase