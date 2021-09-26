import {useReducer} from 'react'


const initialNoteState = {
    lastTimeCreated: null,
    totalNotes: 0,
    notes: []
};

const noteReducer = (prevState, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            const newState =  {
                lastTimeCreated: new Date().toTimeString().slice(0,8),
                totalNotes: prevState.notes.length + 1,
                notes: [...prevState.notes, action.payload]
            }

            console.log(newState);
            return newState;
            // return {
            //     timeCreated: new Date().toTimeString().slice(0,8),
            //     totalNotes: prevState.notes.length + 1,
            //     notes: [...prevState.notes, action.payload]
            // };
        default:
            return prevState;
    }

}

export const useNote = () =>{
        const [noteState, dispatch] = useReducer(noteReducer, initialNoteState);

        return [noteState,dispatch]
}