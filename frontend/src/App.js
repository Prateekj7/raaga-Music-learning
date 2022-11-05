import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AspiringMusician from "./Pages/AspiringMusician";
import MusicTeacherContactUs from "./components/MusicTeacherContactUs/MusicTeacherContactUs";
import Home from "./Pages/Home";
import "./aws-exports";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { LoginProvider } from "./LoginContext";
import TeacherProfile from "./Pages/TeacherProfile";
import StudentProfile from "./Pages/StudentProfile";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/aspiring-musician" element={<AspiringMusician />}></Route>
          <Route path="/music-teacher" element={<MusicTeacherContactUs />}></Route>
          <Route path="/aspiring-musician-profile" element={<StudentProfile />}></Route>
          <Route path="/music-teacher-profile" element={<TeacherProfile />}></Route>
        </Routes>
        <Footer />
      </LoginProvider>
    </div>
  );
}
export default App;
