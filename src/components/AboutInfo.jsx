import { useState, useEffect } from "react";

const AboutInfo = ({ onChange }) => {
  const [about, setAbout] = useState({
    aboutMe: "A little about me...",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setAbout((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    onChange(about);
  }, [about, onChange]);

  return (
    <div className="about-info">
      <h2>About me</h2>
      <textarea
        id="aboutMe"
        name="aboutMe"
        value={about.aboutMe}
        onChange={handleChangeInput}
        rows="5"
        cols="29"
      />
    </div>
  );
};

export default AboutInfo;
