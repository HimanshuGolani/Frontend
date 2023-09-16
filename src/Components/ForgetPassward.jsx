import React from "react";
import "../Css/ForgetPassward.css";
import Login_logo from "../assets/logo-login.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgetPassward = () => {
  const Response = () => {
    toast.success("Passward Change Succesfull", {
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
            <input type="text" placeholder="Enter Passward" />
            <input type="text" placeholder="Confirm Your Passward" />
          </div>
        </div>
        <div className="submit">
          <button onClick={Response}>Change</button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ForgetPassward;
