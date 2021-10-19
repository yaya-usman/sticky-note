import { collection, onSnapshot,addDoc,getDocs } from "@firebase/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../firebase/firebase";
import { useState } from "react";

export const addNoteAsync = createAsyncThunk(
  "notes/addNoteAsync",
  async (payload) => {
      const collectionRef = collection(db, 'notes');

      const newNote = {
        lastTimeCreated: new Date().toTimeString().slice(0, 8),
        totalNotes: onSnapshot(collectionRef, (snapshot) => snapshot.docs.length + 1),
        noteText: payload.noteText,
        rotatePos: payload.rotate
      };
      const doc = await addDoc(collectionRef, newNote)

      return {...doc.data(), id: doc.id}
  }
);

export const fetchNoteAsync = createAsyncThunk("notes/fetchNote", () => {
  const [notes, setNotes] = useState([]);
  const collectionRef = collection(db, "notes");
  onSnapshot(collectionRef, (snapshot) =>
    snapshot.docs.map((doc) => setNotes({...doc.data(), id: doc.id}))
  );
  return { notes };
});

export const deleteNoteAsync = createAsyncThunk("notes/deleteNote", () => {});

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {},

  extraReducers: {
    [fetchNoteAsync.fulfilled]: (state, action) => action.payload.notes,
    [addNoteAsync.fulfilled]: (state,action) =>{
        state.push(action.payload)
    }
  },
});

export default noteSlice.reducer;
