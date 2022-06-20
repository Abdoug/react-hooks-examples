import React, { useCallback, useState } from 'react'
import List from './List'

function Index() {
    const [number, setNumber] = useState(1)
    const [darkTheme, setDarkTheme] = useState(false)
    const themeStyle = {
        backgroundColor: darkTheme ? '#282c34' : 'white',
        border: '1px solid',
        borderColor: darkTheme ? 'white' : '#282c34',
        color: darkTheme ? 'white' : '#282c34',
        padding: 20,
        margin: 10
    }

    const getList = useCallback((toBeAdded) => {
        return [number + toBeAdded, number + toBeAdded + 1, number + toBeAdded + 2]
    }, [number])

    return (
        <div style={themeStyle}>
            <input value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
            <List getList={getList}/>
        </div>
    )
}

export default Index