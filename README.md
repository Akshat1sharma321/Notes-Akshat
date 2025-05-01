# State Management

- **useState**:
  - For form inputs (immediate validation feedback)
  - Notes list management (simple array operations)
- **useEffect**:
  - Sync localStorage → state on mount/updates

## Styling Approach

- **Tailwind CSS**:
  -As tailwind css is widely used for fast modern ui designs . Thus I have also used that.
-**Framer-Motion**:
  -I have used framer motion for smooth animation in the button component which gives a better user interaction.

## Why Decisions

- **React + Vite**: Chosen for fast development and component-based structure.
- **Tailwind CSS**: Enables rapid utility-based styling without context switching.
- **localStorage**: Simple client-side storage, no backend needed.
- **Key Naming**: Used `"notes"` key to keep data scoped and avoid conflicts.
- **useState in AddNote**: Keeps form inputs controlled and in sync.
- **useEffect in NotesList**: Syncs latest storage data → component state.
- **Simple Navigation**: Buttons used instead of Router for simplicity.
- **Error Handling**: Shows banners for storage failures and spinners while saving.
- **Delete by id**: Ensures correct note is deleted even if order changes.
- **Component Split**: AddNote & NotesList keep logic cleanly separated.

### AddNote.jsx
