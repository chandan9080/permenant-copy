import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddPop from "../AddPop/AddPop";
import Card from "../Card/Card";

const Main = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [popup, setPopup] = useState(false);
  const text = useSelector((state) => state.text);

  const handleGoButton = () => {
    console.log(searchTerm);
    setFilteredData(
      text.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  return (
    <div className="main_container">
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
      <div className="add_item">
        <button
          className="add_item_button btn"
          onClick={() => {
            setPopup(true);
          }}
        >
          Add
        </button>
        {popup ? <AddPop></AddPop> : null}
      </div>
      <div className="card_container">
        {filteredData.length > 0
          ? filteredData.map((item, index) => {
              return <Card key={index} item={item} />;
            })
          : text.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
      </div>
    </div>
  );
};

export default Main;
