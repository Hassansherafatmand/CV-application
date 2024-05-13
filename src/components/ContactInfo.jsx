import { useState, useEffect } from "react";

const ContactInfo = ({ onChange }) => {
  const [contact, setContact] = useState({
    phone: "",
    email: "",
    portfolio: "",
    address: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // useEffect watch the state of the object to be update and grantee that the person object updates
  useEffect(() => {
    onChange(contact);
  }, [contact, onChange]);

  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <form className="application">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={contact.phone}
          onChange={handleChangeInput}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChangeInput}
        />
        <label htmlFor="portfolio">Portfolio:</label>
        <input
          type="text"
          id="portfolio"
          name="portfolio"
          value={contact.portfolio}
          onChange={handleChangeInput}
        />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={contact.address}
          onChange={handleChangeInput}
          rows="5" // Set the number of visible rows
          cols="29" // Set the number of visible columns
        />
      </form>
    </div>
  );
};

export default ContactInfo;
