import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // RETRIEVES THE USER FROM LOCAL STORAGE
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [groupId, setGroupId] = useState(
    JSON.parse(localStorage.getItem("groupId")) || null
  );
  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem("members")) || null
  );

  const updateUser = (user) => {
    setUser(user);
  };

  const updateGroupId = (id) => {
    setGroupId(id);
  };

  const updateMembers = (members) => {
    setMembers(members);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("groupId", JSON.stringify(groupId));
    localStorage.setItem("members", JSON.stringify(members));
  }, [user, groupId, members]);

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        groupId,
        updateGroupId,
        members,
        updateMembers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
