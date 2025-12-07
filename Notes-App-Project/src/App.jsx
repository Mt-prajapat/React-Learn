import React from 'react'
import {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const SubmitHandler=(e)=>{
    e.preventDefault()
    
    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form onSubmit={(e)=>{
        SubmitHandler(e) }}
         className='flex lg:w-1/2 justify-between p-6 items-start '>

        <div className='flex w-1/2 items-start gap-4 flex-col'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* Heading Input */}
          <input 
          type="text"  
          placeholder='Enter Notes Heading'
          className='px-3 w-full font-medium py-2 outline-none border-1 rounded-2xl'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          />

          {/* Detailed Input */}
          <textarea 
          type="text" 
          className='w-full outline-none flex items-start flex-row font-medium h-30 px-3 py-2 border-1 rounded-2xl'
          placeholder='Write Details Here'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />

          <button className='w-full active:bg-amber-600 outline-none bg-white text-black p-3 border-1 rounded-2xl font-bold'>Add Notes</button>
        </div>

        <img className='rotate-y-180 h-40' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />

      </form>

      <div className='lg:w-1/2 lg:border-l-2  p-10'>

      <h1 className='text-4xl font-bold'>Recent Notes</h1>

      <div className='flex flex-wrap items-center justify-start h-[90%] overflow-auto flex-wrap gap-5 mt-5'>

        {task.map(function(elem,idx){
          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl pt-8.5 pb-5 px-4 text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">

            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-5 text-xs leading-tight font-semibold text-gray-600'> {elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='bg-red-500 cursor-pointer active:scale-95 py-1 text-xs rounded font-bold text-white w-full'>Delete </button>
            
          </div>
        })}

        

        

        </div>

      </div>

    </div>
    
  )
}

export default App
