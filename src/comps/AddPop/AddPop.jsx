import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../../Redux/textSlice";

const AddPop = () => {
  const dipatch = useDispatch();
  const text = useSelector((state) => state.text);
  const handleGoButton = () => {
    dipatch(addText(searchTerm));
    let newText = [...text, { id: text.length + 1, name: searchTerm }];
    console.log(newText);
    localStorage.setItem("text", JSON.stringify(newText));
  };
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="search_input"></div>
      <input
        placeholder="Search Your Data"
        type="text"
        className="search_input_bar"
        onChange={(e) => {
          e.preventDefault();
          setSearchTerm(e.target.value);
        }}
      ></input>
      <button className="search_input_button" onClick={handleGoButton}>
        Go
      </button>
    </div>
  );
};

export default AddPop;
