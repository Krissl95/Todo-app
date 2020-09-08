import React from 'react'
import AddTodo from './components/TodoLayout/addTask.js'
import './App.css'

function App() {
  return (
    <div>
      <AddTodo forNavn='Kristoffer' etterNavn="Lindbak" />
    </div>
  );
}

export default App;
