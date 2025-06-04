import React , {useContext} from 'react'
import { ThemeContext } from './ThemeProvider'


const ThemeComponent = () => {
    const  {theme , toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <div style={{ background: theme.background, color: theme.color, padding: '20px' }}>
      <p>This is a themed component!</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
      
    </div>
  )
}

export default ThemeComponent
