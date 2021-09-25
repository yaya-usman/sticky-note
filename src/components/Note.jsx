import React,{useRef,useEffect,useState} from 'react'
import './note.css';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {useNote} from '../useNote';

function Note() {
    const focusRef = useRef();
    const [noteText, setNoteText] = useState('');
    const [noteState, dispatch] = useNote();

    //aiding in focusing the input field automatically
    useEffect(() => {
        focusRef.current.focus();
    }, [])

    const addNote = ()=>{

        // gaurd clause
        if(!noteText) return;

        dispatch({type: 'ADD_NOTE'})
    }

    return (
      <form className="note">
        <textarea value = {noteText} onChange = {(e) => setNoteText(e.target.value)} placeholder="Create a new note...." ref={focusRef}></textarea>
        <div onSubmit={addNote}>
          <AddCircleIcon className="add-btn" />
        </div>
      </form>
    );
}

export default Note;
