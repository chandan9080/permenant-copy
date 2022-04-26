import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../Redux/textSlice";
import UpdatePopUp from "../Popups/UpdatePopUp";
import "./Card.css";

const Card = ({ item }) => {
  const [isCopied, setIsCopied] = useState(false);
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const [popup, setPopup] = useState(false);
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
      {popup ? <UpdatePopUp item={item}></UpdatePopUp> : null}
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
            setPopup(true);
          }}
        >
          Edit
        </button>
        <button
          className="card_button"
          onClick={() => {
            let text1 = text.filter((tex) => {
              return tex.id !== item.id;
            });
            console.log(text1);
            localStorage.setItem("text", JSON.stringify(text1));
            dispatch(setText());
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
