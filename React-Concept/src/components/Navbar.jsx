import React from 'react'

const Navbar = (props) => {
  function changeTheme(){
    console.log('theme change',props.theme)
    props.setTheme('Dark')
  }
  return (
    <div>
      <h1>Theme is {props.theme}</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
