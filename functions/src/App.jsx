import React from 'react'

const App = () => {
  // function btnClicked(){
  //   console.log('Button is clicked');
  // }

  // function mouseEnter(){
  //   console.log('Mouse Entered')
  // }

  // function inputEnter(val){
  //   console.log(val)
  // }

  const pageScrolling = (elem)=>{
    if (elem>0){
      console.log('Seedha Scrolling');
    }
    else{
      console.log('Ulta Scrolling');
    }
  }
  return (
    <>
      {/* <div>
        <h1>Hello, Manan</h1>
        <div className='btn'>
          <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>
            Change User
          </button>
          <button onMouseEnter={mouseEnter} onClick={btnClicked}>
            Exlore It!
          </button>
        </div>
      </div> */}


      {/* <div>
        <button onClick={function(){
          console.log('Button is clicked')
        }}>Click Here</button>
      </div> */}


      {/* <div>
        <input onChange={function(elem){
          inputEnter(elem.target.value)
        }} type="text" placeholder='Enter Name'/>
      </div> */}


      <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY);
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </>
  )
}

export default App
