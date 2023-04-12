import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";
import logo from "./logo.png";
import userIcon from "./user icon.png";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">Submit</button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />); // we can also write like this for functional component root.render(Header())
