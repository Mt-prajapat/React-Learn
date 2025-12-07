import React from 'react'

const App = () => {
  // // localStorage.setItem('user','Manan')
  // const user=localStorage.getItem('user');
  // // console.log(user);

  // // localStorage.setItem('age','18')
  // const age = localStorage.getItem('age')
  // console.log(age, user)

  // localStorage.removeItem('user')
  // localStorage.removeItem('age')

  // const user = {
  //   username:'Manan',
  //   age:22,
  //   city:'Jaipur'
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  const user1 = localStorage.getItem('user')
  console.log(typeof(user1))
  console.log(user1)
  const user2 = JSON.parse(localStorage.getItem('user'))
  console.log(typeof(user1))
  console.log(user2)
  return (
    <div>
      App
    </div>
  )
}

export default App
