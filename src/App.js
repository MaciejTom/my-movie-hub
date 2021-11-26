import React from 'react';

//Styles
import  { GlobalStyles } from './GlobalStyles'

//Components 
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <GlobalStyles/>
     
    </div>
  );
}

export default App;
