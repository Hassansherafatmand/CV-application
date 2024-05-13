import { useState, useEffect } from "react";

const ExperianceInfo = ({ onChange }) => {
  const [experiences, setExperiences] = useState([
    {
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    },
  ]);

  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value,
    };
    setExperiences(updatedExperiences); // Update the state
  };

  useEffect(() => {
    onChange(experiences);
  }, [experiences, onChange]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ]);
  };

  return (
    <div className="experience-info">
      <h2>Experiences</h2>
      <form className="application">
        {experiences.map((experience, index) => (
          <div key={index}>
            <label htmlFor={`companyName_${index + 1}`}>Company Name:</label>
            <input
              type="text"
              id={`companyName_${index + 1}`}
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleChangeInput(e, index)}
            />

            <label htmlFor={`position_${index + 1}`}>Position:</label>
            <input
              type="text"
              id={`position_${index + 1}`}
              name="position"
              value={experience.position}
              onChange={(e) => handleChangeInput(e, index)}
            />

            <label htmlFor={`startDate_${index + 1}`}>Start Date:</label>
            <input
              type="date"
              id={`startDate_${index + 1}`}
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleChangeInput(e, index)}
            />

            <label htmlFor={`endDate_${index + 1}`}>End Date:</label>
            <input
              type="date"
              id={`endDate_${index + 1}`}
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleChangeInput(e, index)}
            />

            <label htmlFor={`responsibility_${index + 1}`}>
              Responsibilities:
            </label>
            <input
              type="text"
              id={`responsibilities_${index + 1}`}
              name="responsibilities"
              value={experience.responsibilities}
              onChange={(e) => handleChangeInput(e, index)}
            />
          </div>
        ))}
      </form>
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
};

export default ExperianceInfo;
