import React, { useRef, useState } from "react";
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
    console.log(inputRef.current.innerText);
    inputRef.current.innerText = "";
  };
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="popup">
      <div className="search_input"></div>
      <input
        ref={inputRef}
        placeholder="Add Data"
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
