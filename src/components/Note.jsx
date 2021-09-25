import React,{useRef,useEffect,useState} from 'react'
import './note.css';
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Note() {
    const focusRef = useRef();
    const [noteText, setNoteText] = useState('');

    //aiding in focusing the input field automatically
    useEffect(() => {
        focusRef.current.focus();
    }, [])

    const addNote = ()=>{
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
