import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import Header from "./components/Header";

// Why this nav approach for simplicity: Buttons toggle views, making it simple for users.
export default function App() {
  const [view, setView] = useState("add");
  const [refresh, setRefresh] = useState(0);

  const handleNoteAdded = () => {
    setRefresh((r) => r + 1);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex items-center justify-center gap-5 m-10">
        <button
          onClick={() => setView("add")}
          className={`px-4 py-2 rounded ${
            view === "add" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Add Note
        </button>
        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 rounded ${
            view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          View Notes
        </button>
      </div>
      {view === "add" ? (
        <AddNote onNoteAdded={handleNoteAdded} />
      ) : (
        <NotesList refreshTrigger={refresh} />
      )}
    </div>
  );
}
