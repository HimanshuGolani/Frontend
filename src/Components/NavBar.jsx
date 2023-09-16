import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../Css/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <aside class="sidebar">
        <div class="logo">
          <img src={logo} alt="logo" />
          <h2>HealthTrackr</h2>
        </div>
        <ul class="links">
          <h4>Account</h4>
          <li>
            <span class="material-symbols-outlined">person</span>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <span class="material-symbols-outlined">settings</span>
            <Link to="/settings">Settings</Link>
          </li>

          <h4>Main Menu</h4>

          <li>
            <span class="material-symbols-outlined">flag</span>
            <Link to="/prescription">Prescription</Link>
          </li>

          <li>
            <span class="material-symbols-outlined">ambient_screen</span>
            <Link to="/LabReports">Lab Reports</Link>
          </li>

          <li>
            <span class="material-symbols-outlined">dashboard</span>
            <Link to="/appoinments">Appointments</Link>
          </li>

          <hr />
          <h4>Advanced</h4>

          <li>
            <span class="material-symbols-outlined">group</span>
            <Link to="/people">People</Link>
          </li>

          <li>
            <span class="material-symbols-outlined">mail</span>
            <Link to="/message">Message</Link>
          </li>

          <li>
            <span class="material-symbols-outlined">pacemaker</span>
            <a href="/test">Test</a>
          </li>
          <li>
            <span class="material-symbols-outlined">monitoring</span>
            <Link to="/analytic">Analytic</Link>
          </li>
          <hr />
          <li class="logout-link">
            <span class="material-symbols-outlined">logout</span>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default NavBar;
