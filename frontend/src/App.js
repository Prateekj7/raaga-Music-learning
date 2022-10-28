import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MusicTeacher from "./Pages/AspiringMusician/MusicTeacher/MusicTeacher";
import Home from "./Pages/Home";
import "./aws-exports";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { LoginProvider } from "./LoginContext";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/aspiring-musician" element={<MusicTeacher />}></Route>
        </Routes>
        <Footer />
      </LoginProvider>
    </div>
  );
}
export default App;
