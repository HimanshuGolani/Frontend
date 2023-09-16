import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import ForgetPassward from "./Components/ForgetPassward";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Prescription from "./Components/Prescription";
import AddPrescription from "./Components/AddPrescription";
import LabReports from "./Components/LabReports";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/forgetpassward" element={<ForgetPassward />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/AddPrescription" element={<AddPrescription />} />
        <Route path="/LabReports" element={<LabReports />} />
      </Routes>
    </>
  );
}

export default App;
