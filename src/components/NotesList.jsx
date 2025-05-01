import React, { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../utils/storage";
import { motion } from "framer-motion";

export default function NotesList({ refreshTrigger }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, [refreshTrigger]);

 const handleDelete = (id) => {
   if (window.confirm("Are you sure you want to delete this note?")) {
     deleteNote(id);
     setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
   }
 };

  return (
    <motion.div className="p-4 space-y-4 max-w-md mx-auto">
      {notes.length === 0 && <p className="text-gray-500">No notes found.</p>}
      
      {notes.map((note) => (
        <motion.div key={note.id} 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="p-4 border rounded shadow bg-white"
        >
          <h2 className="font-bold text-lg">{note.title}</h2>
          <p className="text-gray-700">{note.content.slice(0, 100)}...</p>
          <button
            onClick={() => handleDelete(note.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};
