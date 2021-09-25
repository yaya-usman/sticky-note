import React from 'react'

function Note() {
    return (
        <form className = "note">
            <textarea name="note" id="note" cols="30" rows="10"></textarea>
            <button>Add note</button>

        </form>
    )
}

export default Note;
