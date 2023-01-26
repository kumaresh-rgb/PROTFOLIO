import React from 'react';
import Header from './Header';
import "./css/app.css";
import Body from './Pages/Body';

import { ThemeProvider } from 'next-themes'

function App() {

  
  return (
    <div className="App">  
    <ThemeProvider enableSystem={false}>
    <Header/> 
     <Body/>
    </ThemeProvider> 
    
    </div>
  );
}

export default App;
