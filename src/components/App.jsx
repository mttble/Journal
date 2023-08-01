import React, { useState } from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import NavBar from './NavBar'
import ShowEntry from './ShowEntry'

const seedEntries = [
  { category: 'Food', content: 'Pizza is yummy!'},
  { category: 'Coding', content: 'Coding is fun!'},
  { category: 'Gaming', content: 'Skyrim is for the Nords!'}
]

const App = () => {
  const nav = useNavigate()
  const [entries, setEntries] = useState(seedEntries)

  // HOC (higher order component)
  function ShowEntryWrapper() {
    const { id } = useParams()
    return <ShowEntry entry ={entries[id]} />
  }

  function addEntry(category, content) {
    const id = entries.length
    //  Add a new entry
    const newEntry = { category, content }
    setEntries([ ...entries, newEntry])
    nav(`/entry/${id}`)
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home entries={entries} />} />
        <Route path='/category' element={<CategorySelection />} />
        <Route path= '/entry'>
          <Route path=":id" element={<ShowEntryWrapper />} />
          <Route path='new/:category' element={<NewEntry addEntry={addEntry} />} />
        </Route>
        <Route path='*' element={<h3>Page not found</h3>} />
      </Routes>
    </>
  )
}

export default App