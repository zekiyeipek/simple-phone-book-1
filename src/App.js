import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import MainScreen from "./pages/MainScreen";
import PersonScreen from "./pages/PersonScreen";
import "./styles.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    console.log("Adding contact:", contact);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <MainScreen contacts={contacts} onAddContact={handleAddContact} />
            ) : (
              <LoginScreen setLoggedIn={setLoggedIn} />
            )
          }
        />
        <Route
          path="/MainScreen"
          element={<MainScreen contacts={contacts} />}
        />
        <Route
          path="/PersonScreen"
          element={<PersonScreen onAddContact={handleAddContact} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
