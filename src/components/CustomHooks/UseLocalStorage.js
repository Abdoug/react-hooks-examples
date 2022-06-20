import React, { useEffect, useState } from 'react'

const getSavedValue = (name, initialValue) => {
    let value = JSON.parse(localStorage.getItem(name))

    if (value) return value

    if (initialValue instanceof Function) initialValue()

    return initialValue
}

function UseLocalStorage(name, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(name, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default UseLocalStorage