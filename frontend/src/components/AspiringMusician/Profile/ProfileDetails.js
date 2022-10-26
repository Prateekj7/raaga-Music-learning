import React, { useEffect, useState } from "react";
import Profiles from "./Profiles";

const ProfileDetails = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div>
      <div className=" d-flex justify-content-center">
        {profile.slice(0, 1).map((profiles) => (
          <Profiles key={profile._id} teachers={profiles}></Profiles>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;
