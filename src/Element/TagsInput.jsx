import React, { useEffect, useState } from "react";

const TagsComponent = ({
  handleInputChange,
  sign,
  setFormValues = undefined,
  setDetails,
  details,
}) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    handleInputChange(tags, "tags", "gsx$tags");
  }, [tags]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    if (inputValue.trim() === "") return;
    setTags((prev) => {
      const newTags = [...prev, inputValue.trim()]

      return newTags;
    });
    setInputValue("");
  };

  const removeTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const handleChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-light radius1 p-2">
      <div className="row gap-1 p-1">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="shadow fs_color5 align-items-center gap-1 d-flex col-auto tag fs_12 bg-white p-1 radius1"
            // Use "col-auto" class to make the column take only the content size
          >
            {tag}
            <button
              className="dec-off fs_12 border-none  p-1"
              onClick={() => removeTag(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <label htmlFor="" className="fs_12">
        הוסף תגית
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChangeHandler(e)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a tag"
        className="form-control"
      />
    </div>
  );
};

export default TagsComponent;
