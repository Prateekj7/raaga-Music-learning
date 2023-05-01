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
import TeacherDashboard from "./Pages/TeacherDashboard";
import StudentDashboard from "./Pages/StudentDashboard.js";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import News from "./Pages/News";
import Reviews from "./Pages/Reviews";

const queryClient = new QueryClient()

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleShowDrawer = () => setShowDrawer(true);
  const handleCloseDrawer = () => setShowDrawer(false);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <LoginProvider>
          <Navbar showDrawer={showDrawer} handleShowDrawer={handleShowDrawer} handleCloseDrawer={handleCloseDrawer} />
          <Routes>
            <Route exact path="/" element={<Home showDrawer={handleShowDrawer} />}></Route>
            <Route path="/aspiring-musician" element={<AspiringMusician />}></Route>
            <Route path="/News" element={<News />}></Route>
            <Route path="/Reviews" element={<Reviews />}></Route>
            <Route path="/music-teacher" element={<MusicTeacherContactUs />}></Route>
            <Route path="/aspiring-musician-profile" element={<StudentProfile />}></Route>
            <Route path="/music-teacher-profile" element={<TeacherProfile />}></Route>
            <Route path="/aspiring-musician-dashboard" element={<StudentDashboard />}></Route>
            <Route path="/music-teacher-dashboard" element={<TeacherDashboard />}></Route>
          </Routes>
          <Footer />
        </LoginProvider>
      </QueryClientProvider>
    </div>
  );
}
export default App;
