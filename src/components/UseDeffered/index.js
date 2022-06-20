import React, { useState } from 'react'
import List from './List'

function Index() {
    const [input, setInput] = useState("")
    
    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <List input={input}/>
        </div>
    )
}

export default Index