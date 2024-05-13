import React, { useState, useEffect } from "react";

const PersonInfo = ({ onChange }) => {
  const [person, setPerson] = useState({
    fullName: "",
    jobTitle: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // useEffect watch the state of the object to be update and grantee that the person object updates
  useEffect(() => {
    onChange(person);
  }, [person, onChange]);

  return (
    <div className="person-info">
      <h2>Personal Information</h2>
      <form className="application">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={person.fullName}
          onChange={handleChangeInput}
        />
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={person.jobTitle}
          onChange={handleChangeInput}
        />
      </form>
    </div>
  );
};

export default PersonInfo;
