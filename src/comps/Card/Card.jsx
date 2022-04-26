import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card_title">{item.name}</div>
      <div className="card_buttons">
        <button
          className="card_button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Edit
        </button>
        <button
          className="card_button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
