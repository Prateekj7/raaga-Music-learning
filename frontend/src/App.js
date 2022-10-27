import { Offline, Online } from "react-detect-offline";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MusicStation from "./components/AspiringMusician/MusicStation";
import MusicItems from "./components/AspiringMusician/MusicTeacher/Option/MusicItems";
import MusicOption from "./components/AspiringMusician/MusicTeacher/Option/MusicOption";
import Profile from "./components/AspiringMusician/Profile/Profile";
// import Carousel from "./components/Carousel";
// import MusicianTeacherSection from "./components/MusicianTeacherSection/MusicianTeacherSection";
// import NewsTrendingSection from "./components/NewsTrendingSection/NewsTrendingSection";
// import MusicChart from "./components/MusicChart/MusicChart";
// import TrendingVideos from "./components/TrendingVideos/TrendingVideos";
// import FeaturedArtist from "./components/FeaturedArtist/FeaturedArtist";
// import Testimonials from "./components/Testimonials/Testimonials";

import "./aws-exports";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Carousel />
      <MusicianTeacherSection />
      <NewsTrendingSection />
      <MusicChart />
      <TrendingVideos />
      <FeaturedArtist />
      <Testimonials /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="musicstation" element={<MusicStation />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="musicoption" element={<MusicOption />}></Route>
        <Route path="musicitem" element={<MusicItems />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
