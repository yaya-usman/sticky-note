import React, { useRef, useEffect, useState } from "react";
import "./note.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { addNoteAsync, deleteNoteAsync } from "../redux/features/noteSlice";
import {useDispatch,useSelector} from 'react-redux'


function Note() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const [noteText, setNoteText] = useState("");
  const focusRef = useRef();

  //focus the input field automatically
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  

  //on click add the note
  const addNote = (e) => {
    e.preventDefault();

    // gaurd clause
    if (!noteText) return;
    const payload = {
      noteText: noteText,
      rotate: Math.floor(Math.random() * 20),
    };
    dispatch(addNoteAsync(payload));
    setNoteText("");
  };

  //on click delete the note
  const delNote = (note) => {
    dispatch(deleteNoteAsync(note))
  };

  const dropNote = (event) => {
    event.target.style.left = `${event.pageX - 50}px`;
    event.target.style.top = `${event.pageY - 50}px`;
  };

  return (
    <React.Fragment>
      <form className="note-area" onSubmit={addNote}>
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

      {notes.map((note) => {
        return (
          <div
            className="note"
            style={{ transform: `rotate(${note.rotate}deg)` }}
            key={note.id}
            draggable="true"
            onDragEnd={dropNote}
          >
            <div className="delete-note" onClick={() => delNote(note)}>
              <CancelIcon sx={{ color: "red" }} />
            </div>
            <pre>{note.noteText}</pre>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Note;
