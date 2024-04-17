import React, { useContext, useState } from "react";
import { AuthContext } from "../../services/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../services/hooks/apiRequest";

const Login = () => {
  const { updateUser, updateGroupId, updateMembers } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const { password, email } = Object.fromEntries(formData);

    try {
      let response = await useApi.post("/auth/login", {
        email: email,
        password: password,
      });

      // SAVE USER DATA TO LOCAL STORAGE && UPDATE AUTH CONTEXT
      updateUser(response.data.data);
      
      // CHECK IF USER HAD REGISTERED A TEAM
      const { groupId } = response.data.data;
      if (groupId) { 
        updateGroupId(groupId);
        
        response = await useApi.get(`/groups/${groupId}`);
        const { members } = response.data.data;
        updateMembers(members);
      }

      navigate("/");
    } catch (e) {
      setError(
        e.response.data.errors ||
          "An error occurred! please contact us immediately"
      );
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          minLength={5}
          maxLength={15}
          required
        />
        {error && <p>{error}</p>}

        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
