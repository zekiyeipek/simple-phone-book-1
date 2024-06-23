import React, { useState } from "react";

const Card = ({ contact, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(
    contact.phoneNumber,
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedName, editedPhoneNumber);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedName(contact.name);
    setEditedPhoneNumber(contact.phoneNumber);
    setIsEditing(false);
  };

  const handleRemoveClick = () => {
    onRemove();
  };

  return (
    <div className="contact-card">
      <div className="card-image">
        <img
          src={`https://via.placeholder.com/100x100?text=${contact.name}`}
          alt={contact.name}
        />
      </div>
      <div className="card-details">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              type="text"
              value={editedPhoneNumber}
              onChange={(e) => setEditedPhoneNumber(e.target.value)}
            />
          </>
        ) : (
          <>
            <h3>{contact.name}</h3>
            <p>Phone: {contact.phoneNumber}</p>
          </>
        )}
      </div>
      <div className="card-actions">
        {isEditing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleRemoveClick}>Remove</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
