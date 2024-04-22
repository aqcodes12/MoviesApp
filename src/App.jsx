import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SelectedMovie from "./pages/SelectedMovie";
import AllMovies from "./pages/AllMovies";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SelectedMovie />} />
          <Route path="/allmovies" element={<AllMovies />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
