import React , {useContext} from 'react'
import { ThemeContext } from './ThemeContext'


const ThemeComponent = () => {
    const theme = useContext(ThemeContext)
  return (
    <div style={{ background: theme.background, color: theme.color, padding: '20px' }}>
        Theme Component      
    </div>
  )
}

export default ThemeComponent;
