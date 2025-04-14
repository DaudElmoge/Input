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

      {/* <div> 
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  );
}

export default App;
