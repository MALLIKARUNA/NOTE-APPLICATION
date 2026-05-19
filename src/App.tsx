import React, { useEffect, useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  // Load saved notes from localStorage
  const [task, setTask] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  // Save notes whenever task changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(task))
  }, [task])

  // Add Note
  const Handler = (e) => {
    e.preventDefault()

    if (!title.trim() || !details.trim()) {
      alert('Please enter title and details')
      return
    }

    const copyTask = [...task]

    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  // Delete one note
  const deleteNote = (id) => {
    const filteredTask = task.filter((_, index) => index !== id)
    setTask(filteredTask)
  }

  return (
    <div className='min-h-screen bg-black text-white flex flex-col lg:flex-row'>

      {/* Form Section */}
      <form
        onSubmit={Handler}
        className='flex flex-col items-start lg:w-1/2 gap-5 p-10'
      >
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input
          type="text"
          className='px-5 outline-none w-full font-medium py-3 border-2 rounded bg-transparent'
          placeholder='ENTER TITLE NAME'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className='px-5 outline-none w-full font-medium h-32 py-3 border-2 rounded resize-none bg-transparent'
          placeholder='ENTER THE SUB TITLE NAME'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>

        <button className='border-2 active:bg-gray-200 w-full rounded-2xl font-medium cursor-pointer bg-white text-black px-5 py-3'>
          ADD NOTE
        </button>
      </form>

      {/* Notes Section */}
      <div className='p-10 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 max-h-[80vh] overflow-auto'>
          {task.length > 0 ? (
            task.map((elem, idx) => (
              <div
                key={idx}
                className='min-h-[180px] w-[220px] rounded-2xl bg-white text-black p-5 shadow-lg'
              >
                <h3 className='text-xl font-bold break-words'>
                  {elem.title}
                </h3>

                <p className='mt-3 break-words'>
                  {elem.details}
                </p>

                <button
                  onClick={() => deleteNote(idx)}
                  className='mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full'
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className='text-gray-400'>
              No notes added yet...
            </p>
          )}
        </div>
      </div>

    </div>
  )
}

export default App