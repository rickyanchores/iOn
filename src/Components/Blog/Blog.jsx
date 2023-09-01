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
    <div className="Blog p-5 m-5 rounded-md max-md:flex-col">
      {isEditing ? (
        <>
          <input
            className=" bg-zinc-800 text-white p-5"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="bg-zinc-800 text-white p-5"
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
          <button className="edit bg-orange-500 hover:bg-orange-700 p-2 m-2" onClick={handleEditClick}>
            Edit
          </button>
        )}
        <div className="remove bg-red-700 rounded-sm" onClick={onRemove}>
          X
        </div>
      </div>
    </div>
  );
};

export default Blog;
