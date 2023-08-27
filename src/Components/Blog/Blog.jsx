import React, { useState } from "react";

const Blog = ({ image, title, text, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    onEdit(editedTitle, editedText);
    setIsEditing(false);
  };

  return (
    <div className="Blog">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{text}</p>
        </>
      )}
      <div className="actions-container">
        {isEditing ? (
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
        )}
        <div className="remove" onClick={onRemove}>
          X
        </div>
      </div>
    </div>
  );
};

export default Blog;
