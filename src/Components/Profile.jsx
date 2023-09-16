import React from "react";
import "../Css/Profile.css";
import toChange1 from "../assets/profile-pic.png";
import SettingsIcon from "../assets/setting.png";
import MenuIcon from "../assets/menu.png";
import { Link } from "react-router-dom";

const Profile = () => {
  // const {
  //   Current: { userName, userHomeAddress, UserDOB, userDeasese, userContactNo },
  // } = Response;

  return (
    <>
      <div class="container">
        <div class="profile-box">
          <img src={SettingsIcon} class="setting-icon" />
          <img src={toChange1} class="profile-pic" />
          <h3>James Nicholson</h3>
          <p>Leukemia Patient</p>
          <div class="address">
            <h3>About</h3>
            <p class="one">Date of Birth</p>
            <p class="two">21 Sep 2001</p>
            <p class="three">Home Address</p>
            <p class="four">Bhubaneswar, Odisha</p>
            <p class="five">Identificatory</p>
            <p class="six">AD15-7987</p>
            <p class="seven">Phone Number</p>
            <p class="eight">+917768767389</p>
          </div>
          {/* <div class="profile-box">
          <img src={MenuIcon} class="menu-icon" />
          <img src={SettingsIcon} class="setting-icon" />
          <img src={toChange1} class="profile-pic" />
          <h3>{userName}</h3>
          <p>{userDeasese}</p>
          <div class="address">
            <h3>About</h3>
            <p class="one"></p>
            <p class="two">{UserDOB}</p>
            <p class="three">Home Address</p>
            <p class="four">{userHomeAddress}</p>
            <p class="five">Identificatory</p>
            <p class="six">AD15-7987</p>
            <p class="seven">Phone Number</p>
            <p class="eight">{userContactNo}</p>
          </div> */}
          <button type="button">Appointment</button>
          <div class="profile-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
