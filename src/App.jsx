import { useState } from "react";
import "./App.css";

function App() {
  const [formdata, setFormdata] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
     console.log('Form Data Submitted:');
    };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Name:
          <input
            name="name"
            value={formdata.name}
            type="text"
            onChange={handleChange}
            placeholder="Enter Your Name"
          ></input>
        </label>
        <br />
        <label>
          password:
          <input
            name="password"
            type="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          ></input>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
