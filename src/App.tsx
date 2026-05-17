import React, { useState } from 'react'

const App = () => {
  const Handler = (e) => {
    e.preventDefault()
    console.log("form is submited")
  }
  const [title, setTitle] = useState('')
  return (
    <div className='h-screen bg-black  text-white' >

      <form onSubmit={(e) =>
        Handler(e)
      } className=' flex-col flex items-start lg:w-1/2 gap-5  p-10' >


        <h1 className='text-3xl font-bold'>Add notes</h1>

        <input type="text" className='px-5 outline-none w-full font-medium py-2 border-2 rounded' placeholder=' ENTER TITLE NAME '
        />

        <textarea
          className='px-5 outline-none w-full font-medium h-20 py-2 border-2 rounded resize-none'
          placeholder='ENTER THE SUB TITLE NAME'
        ></textarea>

        <button className='border-2  w-full rounded-2xl font-medium cursor-pointer  bg-white text-black px-5 py-2'>ADD NOTE</button>

      </form>
      <div className=' p-10  lg:w-1/2 '>
        <h1 className='text-3xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap h-full overflow-auto  gap-20 mt-5'>
          <div className="h-55 w-45 rounded-2xl bg-white "></div>
          <div className="h-55 w-45 rounded-2xl bg-white "></div>

        </div>
      </div>
    </div>
  )
}

export default App