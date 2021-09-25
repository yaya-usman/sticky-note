import {useReducer} from 'react'


const initialNoteState = {
    timeCreated: null,
    totalNotes: 0,
    notes: []
};

const noteReducer = (prevState, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            return {
                timeCreated: new Date().toTimeString().slice(0,8),
                totalNotes: prevState.notes.length + 1,
                notes: [...prevState, action.payload]
            };
        default:
            return prevState;
    }

}

export const useNote = () =>{
        const [noteState, dispatch] = useReducer(noteReducer, initialNoteState);

        return [noteState,dispatch]
}