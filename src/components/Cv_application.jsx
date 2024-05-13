import { useState } from "react";
import PersonInfo from "./PersonInfo";
import ContactInfo from "./ContactInfo";
import AboutInfo from "./AboutInfo";
import ExperianceInfo from "./ExperianceInfo";

const Cv_application = () => {
  // Crating the Data object****************************************
  //Personal information
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    jobTitle: "",
  });
  //Contact information
  const [contact, setContactInfo] = useState({
    phone: "",
    email: "",
    portfolio: "",
    address: "",
  });
  //About me information
  const [about, setAboutInfo] = useState({
    aboutMe: "",
  });

  const [experiences, setExperiencesInfo] = useState([
    {
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    },
  ]);

  // Crating some functions that update the state of the data object
  //Person function
  const handlePersonalInfoChange = (updateInfo) => {
    setPersonalInfo(updateInfo);
  };
  //Contact function
  const handleContactInfoChange = (updateInfo) => {
    setContactInfo(updateInfo);
  };
  //About function
  const handleAboutInfoChange = (updateInfo) => {
    setAboutInfo(updateInfo);
  };
  //About function
  const handleExsprianceInfoChange = (updateInfo) => {
    setExperiencesInfo(updateInfo);
  };

  return (
    <div className="grid-container">
      {/* cv-application contains the form applications  in a seprate components*/}
      <div className="cv-form">
        <PersonInfo onChange={handlePersonalInfoChange} />
        <ContactInfo onChange={handleContactInfoChange} />
        <AboutInfo onChange={handleAboutInfoChange} />
        <ExperianceInfo onChange={handleExsprianceInfoChange} />
      </div>

      {/* dislay-form display the form application*/}
      <div className="dispaly-form">
        <header className="">
          <div className="img">
            {/* <img src="./pic/hassan.png" alt="profile image" /> */}
          </div>

          <div className="individual-name">
            <h1>{personalInfo.fullName}</h1>
            <h3>{personalInfo.jobTitle}</h3>
          </div>
        </header>
        <main>
          <aside>
            <form action="application">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={contact.phone}
                readOnly
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                readOnly
              />
              <label htmlFor="portfolio">Portfolio:</label>
              <input
                type="text"
                id="portfolio"
                name="portfolio"
                value={contact.portfolio}
                readOnly
              />
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={contact.address}
                readOnly
                rows="5" // Set the number of visible rows
                cols="50" // Set the number of visible columns
              />
            </form>
          </aside>
          <section className="content about">
            <h2>About me</h2>
            <p>{about.aboutMe}</p>
          </section>
          <section className="experiance">
            <h2>Experiances</h2>
            {experiences.map((experience, index) => (
              <div key={index}>
                <p>
                  <span>Company: </span>
                  {experience.companyName}
                </p>
                <p>
                  <span>Position: </span> {experience.position}
                </p>
                <p>
                  <span>Start Date: </span> {experience.startDate}
                </p>
                <p>
                  <span>End Date: </span> {experience.endDate}
                </p>
                <p>
                  <span>Responsibility: </span> {experience.responsibilities}
                </p>
                <br />
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Cv_application;
