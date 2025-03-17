import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Academics from "../pages/Academics";
import JoyBOT from "../pages/JoyBOT";
import Programs from "../pages/Programs";
import Engineering from "../pages/Engineering";
import Education from "../pages/Education";
import Accountancy from "../pages/Accountancy";
import Computer from "../pages/Computer";
import Campuses from "../pages/Campuses";
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
        <Route path="/programs/engineering" element={<Engineering />} />
        <Route path="/programs/education" element={<Education />} />
        <Route path="/programs/business" element={<Accountancy />} />
        <Route path="/programs/computer-studies" element={<Computer />} />
        <Route path="/campuses" element={<Campuses />} />
      </Routes>
    </Router>
  );
};

export default App;
