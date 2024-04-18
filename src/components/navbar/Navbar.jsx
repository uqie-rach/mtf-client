import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/contexts/AuthContext";
import { useApi } from "../../services/hooks/apiRequest";

const Navbar = () => {
  const { user, updateUser, groupId, updateGroupId, updateMembers } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // const verifyGroup = async () => {
  //   const groupCredentials = await useApi.get(`/users/${user.id}`);
  //   if (groupCredentials) {
  //     updateGroupId(groupCredentials.data.data.groupId);
  //   } else {
  //     navigate("/profile");
  //   }
  // };

  const handleLogout = async () => {
    try {
      const response = await useApi.post("/auth/logout");

      updateUser(null);
      updateGroupId(null);
      updateMembers(null);

      console.log(response.data.message)

      navigate('/login')
    } catch (e) {
      console.log(
        e.response.data.errors ||
          "An error occurred! please contact us immediately"
      );
    }
  };
  return user ? (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {!groupId && <Link to="/register-team">Register Team</Link>}
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
