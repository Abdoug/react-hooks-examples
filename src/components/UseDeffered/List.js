import React, { useDeferredValue, useEffect, useMemo } from 'react'

function List({ input }) {
    const inputToBeHandled = useDeferredValue(input)
    const list = useMemo(() => {
        let listToBeUpdated = [];

        for (let i = 0; i < 20000; i++) {
            listToBeUpdated.push(inputToBeHandled)
        }

        return listToBeUpdated
    }, [inputToBeHandled])
    
    useEffect(() => {
        console.log(input, inputToBeHandled);
    }, [input, inputToBeHandled])

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {list.map((e, i) => 
                    <li key={i}>{e}</li>
                )}
            </ul>
        </div>
    )
}

export default List