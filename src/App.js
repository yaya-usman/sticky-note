import React, { useState } from "react";
import HeaderNav from "./components/HeaderNav";
import Note from "./components/Note";
import "./App.css";

function App() {
  const [headerData, setHeaderData] = useState({
    lastTimeCreated: null,
    totalNotes: 0,
  });

  //header component data
  const passHeaderData = ({ lastTimeCreated, totalNotes }) => {
    setHeaderData(() => {
      return {
        lastTimeCreated,
        totalNotes: totalNotes + 1,
      };
    });
  };

  return (
    <div className="app">
      <HeaderNav
        timeCreated={headerData.lastTimeCreated}
        noteCount={headerData.totalNotes}
      />
      <Note passHeaderData={passHeaderData} />
    </div>
  );
}

export default App;
