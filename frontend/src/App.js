import { Offline, Online } from "react-detect-offline";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MusicianTeacherSection from "./components/MusicianTeacherSection/MusicianTeacherSection";
import NewsTrendingSection from "./components/NewsTrendingSection/NewsTrendingSection";
import MusicChart from "./components/MusicChart/MusicChart";
import TrendingVideos from "./components/TrendingVideos/TrendingVideos";
import FeaturedArtist from "./components/FeaturedArtist/FeaturedArtist";
import Testimonials from "./components/Testimonials/Testimonials";
import "./aws-exports"
import Footer from "./components/Footer";

function App() {
  const [testData, setTestData] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log("hello");
        setTestData(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <MusicianTeacherSection />
      <NewsTrendingSection />
      <MusicChart />
      <TrendingVideos />
      <FeaturedArtist />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default App;
