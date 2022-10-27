import React from "react";
import Carousel from "./Carousel";
import MusicianTeacherSection from "./MusicianTeacherSection/MusicianTeacherSection";
import NewsTrendingSection from "./NewsTrendingSection/NewsTrendingSection";
import MusicChart from "./MusicChart/MusicChart";
import TrendingVideos from "./TrendingVideos/TrendingVideos";
import FeaturedArtist from "./FeaturedArtist/FeaturedArtist";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel />
      <MusicianTeacherSection />
      <NewsTrendingSection />
      <MusicChart />
      <TrendingVideos />
      <FeaturedArtist />
      <Testimonials />
    </div>
  );
};

export default Home;
