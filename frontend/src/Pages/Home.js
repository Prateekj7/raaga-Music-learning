import React from "react";
import Carousel from "../components/Carousel";
import MusicianTeacherSection from "../components/MusicianTeacherSection/MusicianTeacherSection";
import NewsTrendingSection from "../components/NewsTrendingSection/NewsTrendingSection";
import MusicChart from "../components/MusicChart/MusicChart";
import TrendingVideos from "../components/TrendingVideos/TrendingVideos";
import FeaturedArtist from "../components/FeaturedArtist/FeaturedArtist";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel />
      <MusicianTeacherSection />
      {/* <NewsTrendingSection /> */}
      {/* <MusicChart /> */}
      {/* <TrendingVideos /> */}
      {/* <FeaturedArtist /> */}
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
