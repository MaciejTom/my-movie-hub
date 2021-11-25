import React from 'react';

//Styles
import  { GlobalStyles } from './GlobalStyles'

//Components 
import Header from './components/Header'

function App() {
  return (
    <div className="App">
     <Header/>
     <GlobalStyles/>
    </div>
  );
}

export default App;
