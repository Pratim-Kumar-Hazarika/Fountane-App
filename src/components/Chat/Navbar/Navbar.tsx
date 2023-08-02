import React from "react";
import profileImage from "../../../assets/profile-image.png";
import logoutImage from "../../../assets/Logout.png";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navcontainer">
      <div className="navImageContainer">
        <img src={profileImage} alt="profile-image" />
        Resolve.Ai
      </div>
      <div>
        {" "}
        <img src={logoutImage} alt="logout-image" />
      </div>
    </div>
  );
}

export default Navbar;
