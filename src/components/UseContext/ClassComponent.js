import React, { Component } from 'react'
import { ThemeContext } from './ThemeProvider'

export default class ClassComponent extends Component {
    themeStyle = darkTheme => {
        return {
            backgroundColor: darkTheme ? '#282c34' : 'white',
            border: '1px solid',
            borderColor: darkTheme ? 'white' : '#282c34',
            color: darkTheme ? 'white' : '#282c34',
            padding: 20,
            margin: 10
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {
                    darkTheme => (
                        <>
                            <button onClick={() => darkTheme.toggleTheme()}>Toggle Theme From Class</button>
                            <div style={this.themeStyle(darkTheme.darkTheme)}>
                                Class theme
                            </div>
                        </>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
