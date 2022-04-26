import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../Redux/textSlice";

const AddPop = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const handleGoButton = () => {
    let newText = [...text, { id: text.length + 1, name: searchTerm }];
    localStorage.setItem("text", JSON.stringify(newText));
    dispatch(setText());
    setSearchTerm("");
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
