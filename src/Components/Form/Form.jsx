import React, { useState } from "react";
import Blog from "../Blog/Blog";

const Form = () => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [blogEntries, setBlogEntries] = useState([]); // Maintain a list of blog entries

  const titleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const textChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new blog entry object
    const newEntry = {
      title: title,
      text: text
    };

    // Add the new entry to the list of blog entries
    setBlogEntries([...blogEntries, newEntry]);

    // Clear the input fields after submission
    setTitle("");
    setText("");
  };

  const removeBlog = (index) => {
    const updatedEntries = [...blogEntries];
    updatedEntries.splice(index, 1);
    setBlogEntries(updatedEntries);
  };

  const editBlog = (index, editedTitle, editedText) => {
    const updatedEntries = [...blogEntries];
    updatedEntries[index].title = editedTitle;
    updatedEntries[index].text = editedText;
    setBlogEntries(updatedEntries);
  };

  return (
    <form className="Form flex flex-wrap flex-col justify-center" action="active">
      <div className="input-container m-auto rounded-md ">
        <input
          type="text"
          className="inputTitle bg-zinc-800 font-extrabold text-2xl w-3/4 p-5 m-5"
          placeholder="Title"
          value={title}
          required
          onChange={titleChange}
        />
        <textarea
          className="inputText bg-zinc-800 w-3/4 p-5"
          placeholder="Write here"
          value={text}
          required
          onChange={textChange}
        />

      </div>
      <button className="submit mt-5 bg-purple-950 hover:bg-purple-700 text-lg w-36 h-16 max-md:w-20 border-none rounded-md m-auto" onClick={submit}>
          +
        </button>
      <div className="results-container mt-5">
        <div className="results">
          {blogEntries.map((entry, index) => (
            <Blog
              key={index}
              image="path_to_your_image" // Replace with the actual path to the image
              title={entry.title}
              text={entry.text}
              onRemove={() => removeBlog(index)}
              onEdit={(editedTitle, editedText, editedImage) =>
                editBlog(index, editedTitle, editedText, editedImage)
              }
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default Form;
