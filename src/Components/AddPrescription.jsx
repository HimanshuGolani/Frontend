import { useState } from "react";
import "../Css/formInput.css";
import FormInput from "./FormInput";

const AddPrescription = () => {
  const [values, setValues] = useState({
    username: "",
    Consultation: "",
    file: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Docter's Name",
      errorMessage:
        "username should be 3-16 characters and shouldn't include any special character!",
      label: "Docter's Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 3,
      name: "Consultation Date",
      type: "date",
      placeholder: "Consultation Date",
      label: "Consultation Date",
    },
    {
      id: 4,
      name: "file",
      type: "file",
      placeholder: "Prescription",
      label: "Prescription",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1> Add New Prescription</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddPrescription;
