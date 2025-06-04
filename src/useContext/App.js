import React from 'react';
import { ThemeProvider } from './LightORDark/ThemeProvider';
import ThemeComponent from './LightORDark/ThemeComponent';
// import { ThemeProvider } from './theme/ThemeContext';
// import ThemedComponent from './theme/ThemeComponent';

const App = () => {
  return (
    // <ThemeProvider>
    //   <ThemedComponent />
    // </ThemeProvider>
    <ThemeProvider>
      <ThemeComponent/>
    </ThemeProvider>
  );
};

export default App;
