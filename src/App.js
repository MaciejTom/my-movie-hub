import React from "react";

//ROUTING
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//STYLES
import { GlobalStyles } from "./GlobalStyles";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => (
 
    <Router>
       <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/film/:movieId" element={<Movie/>}/>
      <Route path="/*" element={<NotFound/>}/>
         
      

      </Routes>
       
     <GlobalStyles/>
    </Router>
   
  );

export default App;
