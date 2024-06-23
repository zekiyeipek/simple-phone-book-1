import React, { useState } from "react";
import { Link } from "react-router-dom";

const PersonScreen = ({ onAddContact }) => {
  document.title = "New Contact";
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddContact = (e) => {
    e.preventDefault();
    if (name && phoneNumber) {
      const newContact = { name, phoneNumber };
      onAddContact(newContact); // Pass the new contact to the parent component
      setName(""); // Clear the input fields after adding
      setPhoneNumber("");
    }
  };

  return (
    <div className="person-screen">
      <h2>Add New Contact</h2>
      <form onSubmit={handleAddContact}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <Link to="/MainScreen">Return to Main Page</Link>
    </div>
  );
};

export default PersonScreen;
