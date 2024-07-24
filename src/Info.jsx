import React from 'react'


function Info({ aplyGreadient, aplyGreadientbyInput, handleInput }) {

  return (
    <div className="bg-transparent h-32 w-full bordeer-md text-center py-5  ">
      <h1 className="font-bold text-3xl ">BACKGROUND GREADIENT COLOR GENERATOR</h1>

      <div className="p-20 flex flex-wrap items-center justify-left  gap-5">

        <input id='clr1' type="text" placeholder='#000000' className="rounded-md text-black px-5 py-3 flex-grow" onChange={handleInput} />
        <input id='clr2' type="text" placeholder='#FFFFFF' className="rounded-md text-black px-5 py-3 flex-grow" onChange={handleInput} />
        <button
          onClick={aplyGreadientbyInput}
          className="rounded-md text-white bg-black px-5 py-3 flex-grow">Click! </button>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={aplyGreadient}
          className="rounded-md text-white bg-black px-5 py-3">Random Gradient</button>
      </div>
    </div>
  )
}

export default Info;




