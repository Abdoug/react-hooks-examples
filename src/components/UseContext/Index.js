import React from 'react'
import ThemeProvider from './ThemeProvider'
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'

function Index() {
    return (
        <ThemeProvider>
            <FunctionalComponent/>
            <ClassComponent/>
        </ThemeProvider>
    )
}

export default Index