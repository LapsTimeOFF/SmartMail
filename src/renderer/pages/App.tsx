import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
