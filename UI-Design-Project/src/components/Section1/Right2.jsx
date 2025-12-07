import React from 'react'

const Right2 = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam quasi aliquid cumque commodi reiciendis?</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white px-6 text-sm py-2 rounded-full font-medium'>
              {props.tag}
            </button>
            <button style={{backgroundColor:props.color}} className=' text-white px-3 text-sm py-2 rounded-full font-medium'><i className='ri-arrow-right-line'></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right2
