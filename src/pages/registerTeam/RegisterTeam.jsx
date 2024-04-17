import { useContext, useEffect, useState } from "react";
import { useApi } from "../../services/hooks/apiRequest.js";
import { AuthContext } from "../../services/contexts/AuthContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";

function RegisterTeam() {
  const [memberField, setMemberField] = useState([<MemberField key={0} />]);
  const { updateGroupId, groupId } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    // PREVENT PAGE RELOAD
    e.preventDefault();

    // GET GROUP & MEMBERS DATA
    let memberData = [];
    let groupData = {};

    // ASSIGN GROUP DATA
    const groupEntries = Array.from(
      document.querySelectorAll(".group-data input")
    );
    const memberGroup = Array.from(document.querySelectorAll(".member"));

    Object.assign(
      groupData,
      ...groupEntries.map((entry) => ({ [entry.name]: entry.value }))
    );

    // ASSIGN MEMBER DATA
    memberGroup.map((member) => {
      const memberEntries = Array.from(member.querySelectorAll(".member-data"));

      memberData.push(
        Object.assign(
          {},
          ...memberEntries.map((entry) => ({ [entry.name]: entry.value }))
        )
      );
    });

    // SEND GROUP DATA TO API
    const groupReq = await useApi.post("/groups", groupData);
    updateGroupId(groupReq.data.data.groupId);

    // SEND DATA TO API
    let temp = [];

    // SEND MEMBER DATA TO API
    memberData.map(async (member, index) => {
      const foo = await useApi.post("/member", {
        ...member,
        groupId: groupReq.data.data.groupId,
      });

      // SAVE REGISTERED MEMBER TO LOCAL STORAGE
      temp.push(foo.data.data);
      localStorage.setItem("members", JSON.stringify(temp));
    });
  };

  const handleAddMemberField = (e) => {
    e.preventDefault();
    if (memberField.length < 5) {
      setMemberField([
        ...memberField,
        <MemberField key={memberField.length} />,
      ]);
    } else {
      alert("Max member is 5");
    }
  };

  const handleRemoveMemberField = (e) => {
    e.preventDefault();

    if (memberField.length > 1) {
      setMemberField(memberField.slice(0, memberField.length - 1));
    } else {
      alert("Min member is 1");
    }
  };

  return groupId ? (
    <Navigate to="/profile" />
  ) : (
    <>
      <div className="card">
        <button>test</button>
        <form onSubmit={handleFormSubmit}>
          {/* Group */}
          <div className="group-data">
            <h2>Group data</h2>
            <div>
              <input
                type="text"
                name="groupName"
                id="groupName"
                placeholder="groupName"
                required
              />
              <input
                type="text"
                name="paymentProofUrl"
                id="paymentProofUrl"
                placeholder="paymentProofUrl"
                required
              />
            </div>
          </div>

          {/* Member */}
          <div className="form-member-field">
            <h2>Member data</h2>
            {memberField}
            <div>
              <button onClick={handleAddMemberField}>+</button>
              <button onClick={handleRemoveMemberField}>-</button>
            </div>
          </div>

          {/* Submit */}
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

const MemberField = () => {
  return (
    <div className="member">
      <div>
        <input
          className="member-data"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="fullname"
          required
        />
        <input
          className="member-data"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
        />
        <input
          className="member-data"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="phoneNumber"
          required
        />
        <select name="role" id="role" className="member-data">
          <option value="hacker">Hacker</option>
          <option value="hipster">Hipster</option>
          <option value="hustler">Hustler</option>
        </select>
      </div>
    </div>
  );
};
export default RegisterTeam;
