import React, { useState } from "react";
import "./Card.css";

const Card = ({ item }) => {
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(item.name)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card">
      <div className="card_title">
        <div
          className="slogon_card"
          onClick={() => {
            handleCopyClick();
          }}
        >
          <span className="copy_text">
            {isCopied ? "Copied !" : "Clickt to copy"}
          </span>
          {item.name}
        </div>
      </div>
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
