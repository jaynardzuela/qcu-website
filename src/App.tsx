import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Academics from "../pages/Academics";
import JoyBOT from "../pages/JoyBOT";
import Programs from "../pages/Programs";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/joybot" element={<JoyBOT />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </Router>
  );
};

export default App;
