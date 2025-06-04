import React from 'react'
import { createContext, useState } from 'react'
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [isDark , setIsDark] = useState(true)
  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }
  const theme = isDark ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }
  return (
    <div>
      <ThemeContext.Provider  >
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

