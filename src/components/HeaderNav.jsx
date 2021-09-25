import React from "react";
import "./headerNav.css";
import Badge from "@mui/material/Badge";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

function HeaderNav(props) {
  return (
    <header className="header__container">
      <div className="wrapper">
        <div className="left">
          <img
            src="https://www.simplestickynotes.com/resources/images/simple-sticky-notes-logo.png"
            alt="logo"
            className="header__logo"
          />
          <div className="header__title">
            <h1>Sticky Note</h1>
            <p>Your one stop space for your notes...</p>
          </div>
        </div>
        <div className="right">
          <Badge badgeContent={4} color="success">
            <NoteAltIcon color="action" fontSize="large" />
          </Badge>
          {/* <div className="date_modified">{Date().now().toLocaleString}</div> */}
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
