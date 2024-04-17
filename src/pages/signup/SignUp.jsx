import React, { useContext, useState } from "react";
import { useApi } from "../../services/hooks/apiRequest";
import { AuthContext } from "../../services/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const { password, confirmPassword, ...signupData } =
      Object.fromEntries(formData);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    signupData.password = password;

    try {
      await useApi.post("/auth/register", signupData);

      navigate("/login");
    } catch (e) {
      setError(e.response.data.errors || "An error occurred! please contact us immediately");
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input name="fullname" type="text" placeholder="fullname" required />
        <input name="phoneNumber" type="text" placeholder="phone number" />
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          minLength={5}
          maxLength={15}
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
