import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import "../Css/AddBtn.css";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="btn">
      <button>
        <BiSolidAddToQueue />
        <Link to="/AddPrescription">Add+</Link>
      </button>
    </div>
  );
};

export default AddButton;
