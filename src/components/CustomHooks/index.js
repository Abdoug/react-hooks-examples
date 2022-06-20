import React from 'react'
import { useLocalStorage } from './hooks'

function Index() {
    const [value, setValue] = useLocalStorage("name", "")

    return (
    <div>
        <input value={value} onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

export default Index