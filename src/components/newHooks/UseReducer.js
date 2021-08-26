import React, { useState, useEffect, useReducer } from 'react';

const notesReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_NOTES':
          return action.notes;
      case 'ADD_NOTE':
          return [
            ...state,
            { title: action.title, body: action.body }
          ]
      case 'REMOVE_NOTE':
        return state.filter((note) => note.title !== action.title)
      default:
        return state;
    }
}

const UseReducer = () => {
  // const [notes, setNotes] = useState([]);
  // returns an array with two things on it (state and dispatch function)
  // state below can be named as notes or any and if multiple dispatches then dispatch can have suibale name 
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes})
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => ( 
          <Note key={note.title} note= {note} removeNote={removeNote}/>
        )
      )}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange= {(e) => setBody(e.target.value)}></textarea>
        <button>Add note</button>
      </form>
    </div>
  )
}

export default UseReducer;

const Note = ({note, removeNote}) => {
  // cleaning effect
  useEffect(() => {
    console.log('Setting up effect!')
    // for cleansing and is same as componentDidUnmount
    return () => {
      console.log('Cleaning up effect!')
    }
  }, [])
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}