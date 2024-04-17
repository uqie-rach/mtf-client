import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../services/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../services/hooks/apiRequest";

const Profile = () => {
  const { user, groupId, members, updateMembers } = useContext(AuthContext);
  const [currentMembers, setCurrentMembers] = useState([]);

  useEffect(() => {
    if (groupId) verifyMembers();
    if (groupId) setCurrentMembers(filterMembersRole(members));
  }, [members]);

  const verifyMembers = async () => {
    const response = await useApi.get(`/groups/${groupId}`);

    if (response) {
      updateMembers(response.data.data.members);
    }
  };

  const filterMembersRole = (data) => {
    if (!data) return null;

    return data.reduce((acc, member) => {
      if (!acc[member.role]) {
        acc[member.role] = [];
      }

      acc[member.role].push(member);
      return acc;
    }, {});
  };

  const issuedDate = new Date(user.createdAt).toLocaleDateString("id-ID", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Jakarta", // Your local time zone
  });
  return (
    <div>
      <h1>Profile</h1>
      {groupId ? <p>Group ID: {groupId}</p> : <p>Unregistered to MTF</p>}

      {user && (
        <div>
          <p>Name: {user.fullname}</p>
          <p>Email: {user.email}</p>
          <p>Joined at: {issuedDate}</p>
        </div>
      )}

      <div className="members">
        {members &&
          Object.keys(currentMembers).map((role, index) => (
            <div key={index}>
              <h2>{role}</h2>
              <ul className="member">
                {currentMembers[role].map((member, index) => (
                  <li key={index}>
                    <h3>{member.fullname}</h3>
                    <p>{member.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
