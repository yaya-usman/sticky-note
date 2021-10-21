import React, { useEffect } from "react";
import HeaderNav from "./components/HeaderNav";
import Note from "./components/Note";
import "./App.css";
import { fetchNoteAsync } from "./redux/features/noteSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNoteAsync());
  }, [dispatch]);

  return (
    <div className="app">
      <HeaderNav />
      <Note />
    </div>
  );
}

export default App;
