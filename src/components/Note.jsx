import React, { useRef, useEffect, useState } from "react";
import "./note.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNote } from "../useNote";
import { v4 as uuid } from "uuid";
import firebase from "../firebase";
import {fetchNoteAsync,addNoteAsync} from '../redux/features/noteSlice'
import {useDispatch} from 'react-redux'

function Note(props) {
  // const [noteState, dispatch] = useNote();
  const dispatch = useDispatch()
  const [noteText, setNoteText] = useState("");
  const focusRef = useRef();

  //focus the input field automatically
  useEffect(() => {
    focusRef.current.focus();
  }, []);


  // useEffect(() => {
  //   dispatch(fetchNoteAsync)
  // },[])

  //on click add the note
  const addNote = (e) => {
    e.preventDefault();
    // gaurd clause
    if (!noteText) return;
    const payload = {
        noteText: noteText,
        rotate: Math.floor(Math.random() * 20),
      }
    dispatch(addNoteAsync(payload));
    setNoteText("");
    // props.passHeaderData(noteState);
  };

  //on click delete the note
  // const delNote = (note) => {
  //   dispatch({ type: "DEL_NOTE", payload: note });
  //   props.passHeaderData({
  //     ...noteState,
  //     totalNotes: noteState.totalNotes - 2,
  //   });
  // };

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

      {/* {noteState.notes.map((note) => {
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
      })} */}
    </React.Fragment>
  );
}

export default Note;
