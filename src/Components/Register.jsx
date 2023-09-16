import React from "react";
import "../Css/Register.css";
import Login_logo from "../assets/logo-login.jpg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const Response = () => {
    toast.success("Registeraction Succesfull", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // Shall be edited when the backend is done .

    // toast.error("Login Unsuccesfull!", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
  };
  return (
    <>
      <div className="main-container">
        <div className="logo-img-container">
          <img className="logo-image" src={Login_logo} alt="logo" />
        </div>
        <div className="form">
          <div className="input-field">
            <input type="text" placeholder="Enter your Name" />
            <input type="text" placeholder="Enter your Date of Birth" />
            <input type="text" placeholder="Enter your Phone Number" />
            <input type="text" placeholder="Enter your Address" />
            <input type="text" placeholder="Enter your Gmail iD" />
            <input type="text" placeholder="Enter your passward" required />
            <input type="text" placeholder="Confirm your passward" required />
          </div>
        </div>
        <div className="submit">
          <button onClick={Response}>Register</button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Register;
