import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Card from "./Card";
import PersonScreen from "./PersonScreen";
import "../styles.css";

const MainScreen = ({ contacts: initialContacts, onAddContact }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredContacts(newFilteredContacts);
  }, [contacts, searchText]);

  const handleSearch = () => {
    // No need to manually set filteredContacts here
    // useEffect will handle it when searchText or contacts change
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  const handleRemoveContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const handleEditContact = (index, newName, newPhoneNumber) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = {
      name: newName,
      phoneNumber: newPhoneNumber,
    };
    setContacts(updatedContacts);
  };

  return (
    <div className="main-screen">
      <Routes>
        <Route
          path="/PersonScreen"
          element={<PersonScreen onAddContact={onAddContact} />}
        />
      </Routes>
      <div className="left-panel">
        <div className="main-menu">
          <h2>Main Menu</h2>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter name to find"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Find</button>
        <button>
          <Link to="/PersonScreen">New Contact</Link>
        </button>
        <button onClick={handleClearSearch}>Clear Search</button>
        <button>
          <Link to="/">Return to Main Page</Link>
        </button>
      </div>
      <div className="right-panel">
        {filteredContacts.map((contact, index) => (
          <Card
            key={index}
            contact={contact}
            onRemove={() => handleRemoveContact(index)}
            onEdit={(newName, newPhoneNumber) =>
              handleEditContact(index, newName, newPhoneNumber)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
