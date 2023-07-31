import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ entries, setEntries }) => {
  const { category } = useParams()
  const [content, setContent] = useState('')

  function submit(e) {
    e.preventDefault()
    //  Add a new entry
    const newEntry = { category, content }
    setEntries([ ...entries, newEntry])
  }

  return (
  <>
      <h3 className="text-center m-4">New Entry in {category} category</h3>
      <form className="container " onSubmit={submit}>
        <div>
          <textarea value={content} onChange={e => setContent(e.target.value)} className='form-control' rows="8"></textarea>
        </div>
        <button className='btn btn-primary mt-3 container d-flex justify-content-center' style={{ maxWidth: '200px' }}>Create Entry</button>
      </form>
    </>
  )
}

export default NewEntry