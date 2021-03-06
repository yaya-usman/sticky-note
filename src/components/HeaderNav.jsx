import "./headerNav.css";
import Badge from "@mui/material/Badge";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { useSelector } from "react-redux";

function HeaderNav() {
  const noteCount = useSelector((state) => state.notes.length);

  const isLoading = useSelector((state) => state.notes[0]?.loading);

  const lastTimeCreated = useSelector(
    (state) => state.notes[noteCount - 2]?.timeCreated
  );

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
            <Badge
              badgeContent={`${isLoading ? 0 : noteCount}`}
              color="success"
            >
              <NoteAltIcon color="action" fontSize="large" />
            </Badge>
          </div>
          <p>
            Last note added at:{" "}
            {noteCount > 1 && <strong>{lastTimeCreated}</strong>}
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
