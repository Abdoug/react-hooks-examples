import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput'

function Index() {
    const [value, setValue] = useState("")
    const inputRef = useRef(null)

    return (
        <div>
            <CustomInput
                ref={inputRef}
                value={value}
                onChange={setValue}
            />
            <button onClick={() => inputRef.current.alertHi()}>Click Me!</button>
        </div>
    )
}

export default Index