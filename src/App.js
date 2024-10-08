import Home from "./screen/Home";
import Abouts from "./screen/Abouts";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screen/Signup.jsx";
import Login from "./screen/Login.jsx";
import MyOrder from "./screen/MyOrder.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Abouts" element={<Abouts />} />
        <Route exact path="/Signup" element={<Signup/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/MyOrder" element={<MyOrder/>} />
      </Routes>
    </Router>
  );
}

export default App;
