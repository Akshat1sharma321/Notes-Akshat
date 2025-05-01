export const saveNote = (note) => {
  const notes = getNotes();
  const newNote = { ...note, id: Date.now() }; // Add unique ID
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes") || "[]");
};

export const deleteNote = (id) => {
  const notes = getNotes().filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
};
