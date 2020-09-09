import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [gjøremål, setGjøremål] = useState([])
  const [inputTekst, setInputTekst] = useState([])
  return (
    <div className="todoBody">
      <h2>Todo liste - Kristoffer Lindbak</h2>
      <Form inputTekst={inputTekst} setInputTekst={setInputTekst} setGjøremål={setGjøremål} />
      <TodoList gjøremål={gjøremål} setGjøremål={setGjøremål} />
    </div>
  );
}

export default App;

