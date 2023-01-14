import React, { useEffect } from "react";
import profilePic from "../../assets/square-profile-photo.jpg";

export default function ProfilePic() {
  return (
    <imageDiv>
      <img
        className="elwyn"
        alt="Elwyn"
        style={{
          borderRadius: "300px",
          border: "2px solid #d5e3f5",
          height: "100%",
          width: "100%",
        }}
        src={profilePic}
      ></img>
    </imageDiv>
  );
}
