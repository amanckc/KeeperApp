import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes";

function App() {
  return (
    <div>
      <Header />
      {/* <Note title="This is the note title" content="This is the note content" /> */}

      {note.map((noteItem) => (
        <Note title={noteItem.title} content={noteItem.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
