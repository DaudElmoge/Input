import { useState } from "react"; // Importing useState from React
import "./App.css";

function App() {
  const [formdata, setFormdata] = useState({
    // Initializing state with useState
    // Setting initial state for form data
    // The state is an object with two properties: name and password
    // Both properties are initialized to empty strings
    // This state will be used to store the values of the input fields
    // as the user types in their information
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    // Function to handle changes in input fields
    // This function is called whenever the user types in the input fields
    // It updates the state with the new value of the input field
    // The event object (e) contains information about the input field that triggered the change
    // We use destructuring to extract the name and value properties from the event target
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData, //this spreads the previous state
      // This creates a new object with the previous state and updates the specific field
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Function to handle form submission
    // This function is called when the user submits the form
    // It prevents the default behavior of the form submission (which would refresh the page)
    // and logs the form data to the console
    e.preventDefault();

    // Check if either the name or password field is empty
    if (!formdata.name.trim() || !formdata.password.trim()) {
      alert("Please fill out all fields before submitting."); // Show an alert if fields are empty
      return; // Stop the form submission
    }

    console.log("Form Data Submitted:");

    setFormdata({
      name: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* The onSubmit event is triggered when the user submits the form */}
        {/* The handleSubmit function is called to handle the form submission */}
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
