import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles
import { GlobalStyles } from "./GlobalStyles";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movie from "./components/Movie";
import ActorPage from "./components/ActorPage";
import NotFound from "./components/NotFound";
import ContainerContent from "./components/ContainerContent";

const App = () => (
  <Router>
    <ContainerContent>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:movieId" element={<Movie />} />
        <Route path="/actor/:actorId" element={<ActorPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ContainerContent>
    <Footer />
    <GlobalStyles />
  </Router>
);

export default App;
