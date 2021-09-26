import React, { useRef, useEffect, useState } from "react";
import "./note.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNote } from "../useNote";

function Note(props) {
  const [noteState, dispatch] = useNote();
  const [noteText, setNoteText] = useState("");
  const focusRef = useRef();

  //focus the input field automatically
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    // gaurd clause
    if (!noteText) return;

    dispatch({ type: "ADD_NOTE", payload: { noteText: noteText } });
    setNoteText("");
    props.passHeaderData(noteState);
  };

  return (
    <form className="note" onSubmit={addNote}>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Create a new note...."
        ref={focusRef}
      ></textarea>
      <label>
        <button>
          <AddCircleIcon className="add-btn" />
        </button>
      </label>
    </form>
  );
}

export default Note;
