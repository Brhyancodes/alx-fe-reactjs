import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = {};
    if (!username) {
      validateErrors.username = "Username is required";
    }

    if (!email) {
      validateErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validateErrors.email = "Enter a valid email format";
    }

    if (!password) {
      validateErrors.password = "Password is required";
    } else if (password.length < 8) {
      validateErrors.password = "Password must be longer than 8 characters";
    }

    setErrors(validateErrors);
    console.log(
      `Username: ${username}`,
      `Email: ${email}`,
      `Password: ${password}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "6px" }}
    >
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.username && (
        <span style={{ color: "red" }}>{errors.username}</span>
      )}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password}</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;