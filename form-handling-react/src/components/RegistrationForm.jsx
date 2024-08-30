import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    }
  };

  // Function to handle username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to validate fields
  const validateFields = () => {
    if (username.length === 0 || email.length === 0 || password.length === 0) {
      alert("All fields are required");
      return false;
    }
    return true;
  };

  // Function to validate form
  const validateForm = () => {
    const errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    if (!email || !validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password || password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (Object.keys(errors).length > 0) {
      alert("Form validation failed");
      return false;
    }
    return true;
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    };
    //Password field validation
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };
    //Username field validation
    const validateUsername = (username) => {
      const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
      return usernameRegex.test(username);
    };

  return (
      <form onSubmit={handleSubmit}>
      <label for="UserName" className="form-label">UserName:</label>
      <input
        type="text"
        id="UserName"
        name="UserName"
        value={username}
        onChange={handleUsernameChange}
              required
              className="form-input"
      />
      <br />

      <label for="email" className="form-label">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
              required
              className="form-input"
      />
      <br />

      <label for="password" className="form-label">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
              required
              className="form-input"
      />
      <br />
      <button className="form-btn">Submit</button>
    </form>
  );
}

export default RegistrationForm;