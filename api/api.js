import axios from '../node_modules/axios/dist/axios.min.js';

const getAll = () => axios.get('http://localhost:3000/api/user/666');
const getAllNotes = () => axios.get('http://localhost:3000/api/notes');
const getAllNoteBooks = () => axios.get('http://localhost:3000/api/notebooks');
const getAllTags = () => axios.get('http://localhost:3000/api/tags');
const saveNote = note => axios.post('http://localhost:3000/api/notes', note);
const delNote = noteId => axios.delete(`http://localhost:3000/api/notes/${noteId}`);

export default {
  getAll,
  getAllNotes,
  getAllNoteBooks,
  getAllTags,
  saveNote,
  delNote
};
