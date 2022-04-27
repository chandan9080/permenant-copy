import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../Redux/textSlice";

const UpdatePopUp = ({ item }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const handleGoButton = () => {
    let newText = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i].id === item.id) {
        newText.push({ id: item.id, name: searchTerm });
      } else {
        newText.push(text[i]);
      }
    }
    localStorage.setItem("text", JSON.stringify(newText));
    dispatch(setText());
    setSearchTerm("");
    inputRef.current.innerText = "";
  };
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="popup">
      <div className="search_input"></div>
      <input
        ref={inputRef}
        placeholder={item.name}
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

export default UpdatePopUp;
