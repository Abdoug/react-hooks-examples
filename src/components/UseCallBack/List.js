import React, { useEffect, useState } from 'react'

function List({ getList }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(getList(5))
        console.log("Re-rendering");
    }, [getList])

    return (
        <div>
            {list.map((e, i) => 
                <p key={i}>{e}</p>
            )}
        </div>
    )
}

export default List