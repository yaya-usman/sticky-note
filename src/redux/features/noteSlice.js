import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../firebase/firebase";

export const addNoteAsync = createAsyncThunk(
  "notes/addNoteAsync",
  async (payload) => {
    try {
      const collectionRef = collection(db, "notes");

      const newNote = {
        timeCreated: new Date().toTimeString().slice(0, 8),
        noteText: payload.noteText,
        rotate: payload.rotate,
      };
      const doc = await addDoc(collectionRef, newNote);
      return { ...newNote, id: doc.id };
    } catch (error) {
      alert(`Error adding docs :(`);
    }
  }
);

export const fetchNoteAsync = createAsyncThunk("notes/fetchNote", async () => {
  try {
    const collectionRef = collection(db, "notes");
    const snapshot = await getDocs(collectionRef);
    const notes = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { notes };
  } catch (error) {
    alert(`Error Fetching docs :(`);
  }
});

export const deleteNoteAsync = createAsyncThunk(
  "notes/deleteNote",
  async (payload) => {
    try {
      const docRef = doc(db, "notes", payload.id);
      await deleteDoc(docRef);
      return payload;
    } catch (error) {
      alert(`Unable to delete doc :(`);
    }
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {},

  extraReducers: {
    [fetchNoteAsync.fulfilled]: (state, action) => action.payload.notes,
    [addNoteAsync.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [deleteNoteAsync.fulfilled]: (state, action) => {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export default noteSlice.reducer;
