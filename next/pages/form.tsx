import React, { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onUsernameChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUsername(value);
  };
  const onEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setEmail(value);
  };
  const onPasswordChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setPassword(value);
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError("Please fill out all fields");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={onUsernameChange}
        type="text"
        name="Username"
        required
      />
      <input
        value={email}
        onChange={onEmailChange}
        type="email"
        name="Email"
        required
      />
      <input
        value={password}
        onChange={onPasswordChange}
        type="password"
        name="Password"
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
