import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../Redux/textSlice";

const UpdatePopUp = ({ item }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const handleGoButton = () => {
    let newText = text.map((tex) => {
      if (tex.id === item.id) {
        tex.name = searchTerm;
      }
      return tex;
    });
    localStorage.setItem("text", JSON.stringify(newText));
    dispatch(setText());
    setSearchTerm("");
    inputRef.current.innerText = "";
  };
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="search_input"></div>
      <input
        ref={inputRef}
        placeholder="Search Your Data"
        type="text"
        className="search_input_bar"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          inputRef.current.focus();
          inputRef.current.innerText = e.target.value;
        }}
      ></input>
      <button className="search_input_button" onClick={handleGoButton}>
        Go
      </button>
    </div>
  );
};

export default UpdatePopUp;
