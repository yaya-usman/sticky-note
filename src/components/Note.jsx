import React from 'react'

function Note() {
    return (
        <form className = "note">
            <textarea placeholder ="Create a new note...." ></textarea>
            <button>Add note</button>
        </form>
    )
}

export default Note;
