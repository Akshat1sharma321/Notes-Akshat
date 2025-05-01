import React, { useState } from "react";
import { motion } from "framer-motion"; // Don't forget this import!
import { saveNote } from "../utils/storage";

export default function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      saveNote({ title, content });
      onNoteAdded();
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to save note!");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-red-100 text-red-800 p-2 rounded"
        >
          Error: {error}
        </motion.div>
      )}

      <motion.div whileHover={{ scale: 1.02 }}>
        <input
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }}>
        <textarea
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
        disabled={saving}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#3b82f6",
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.9,
          backgroundColor: "#1d4ed8",
        }}
        animate={{
          backgroundColor: saving ? "#9ca3af" : "#3b82f6",
        }}
      >
        {saving ? (
          <div className="flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-5 w-5 mr-2 border-2 border-white rounded-full"
              style={{ borderTopColor: "transparent" }}
            />
            Saving...
          </div>
        ) : (
          "Add Note"
        )}
      </motion.button>
    </motion.form>
  );
}
