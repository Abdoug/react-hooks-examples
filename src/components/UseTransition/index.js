import React, { useState, useTransition } from 'react'

function Index() {
    const [isPending, startTransition] = useTransition()
    const [value, setValue] = useState("")
    const [list, setList] = useState([])

    const handleOnChange = e => {
        setValue(e.target.value)
        
        startTransition(() => {
            let listToBeUpdated = [];

            for (let i = 0; i < 20000; i++) {
                listToBeUpdated.push(e.target.value)
            }
    
            setList(listToBeUpdated)
        })
    }

    return (
        <div>
            <input value={value} onChange={e => handleOnChange(e)}/>
            <ul style={{listStyle: 'none'}}>
                {isPending ? 'Loading...' : list.map((e, i) => 
                    <li key={i}>{e}</li>
                )}
            </ul>
        </div>
    )
}

export default Index