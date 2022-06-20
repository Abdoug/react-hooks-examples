import React from 'react'
import { useDarkTheme } from './ThemeProvider';

function Functional() {
    const darkTheme = useDarkTheme(); 
    const themeStyle = darkTheme => {
        return {
            backgroundColor: darkTheme ? '#282c34' : 'white',
            border: '1px solid',
            borderColor: darkTheme ? 'white' : '#282c34',
            color: darkTheme ? 'white' : '#282c34',
            padding: 20,
            margin: 10
        }
    }

    return (
      <>
          <button onClick={() => darkTheme.toggleTheme()}>Toggle Theme From Functional</button>
          <div style={themeStyle(darkTheme.darkTheme)}>
            Functional theme
        </div>
      </>
    )
}

export default Functional