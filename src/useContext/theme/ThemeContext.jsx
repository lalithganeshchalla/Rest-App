import React from 'react'

export const ThemeContext = React.createContext();


export const ThemeProvider  = ({children}) => {
    const theme = {
        color: 'white',
        background: 'black'
    }
  return (
    
      <ThemeContext.Provider value={theme}>
        {children}
        </ThemeContext.Provider>
    
  )
}


