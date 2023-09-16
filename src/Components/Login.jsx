import React from "react";
import "../Css/Login.css";
import Login_logo from "../assets/logo-login.jpg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const Response = () => {
    toast.success("Login Succesfull", {
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
            <input type="text" placeholder="Enter your Gmail iD" />
            <input type="text" placeholder="Enter your passward" />
            <div className="related-links">
              <Link to="/login/forgetpassward">Forget Passward</Link>
              <div className="register">
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="submit">
          <button onClick={Response}>Login</button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
