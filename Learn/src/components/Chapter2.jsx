import React from 'react'

const Chapter2 = (props) => {
  return (
    <>
      <div className='chapter2'>
      <img src={props.img} alt="" />
      <h2>{props.user} - {props.age}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab, molestias necessitatibus, illo laboriosam nemo mollitia quis cupiditate voluptas officiis quae est quas, aliquid quam.</p>
      <button>View Profile</button>
      </div>
    </>
  )
}

export default Chapter2

