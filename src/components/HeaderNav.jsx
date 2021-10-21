import "./headerNav.css";
import Badge from "@mui/material/Badge";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import {useSelector} from 'react-redux'

function HeaderNav({ timeCreated, noteCount }) {

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
            <p>Your one stop space for your short notes...</p>
          </div>
        </div>
        <div className="right">
          <div>
            <Badge badgeContent={noteCount} color="success">
              <NoteAltIcon color="action" fontSize="large" />
            </Badge>
          </div>
          <p>
            Last note added at: {noteCount > 1 && <strong>{timeCreated}</strong>}
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
