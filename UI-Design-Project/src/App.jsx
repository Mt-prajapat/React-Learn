import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users =[
    {
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1507537417841-81e85feb9bd2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1664199486732-ad37487bc9a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'orange',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'pink',
      tag:'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJNV3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'black',
      tag:'Excellent'
    }
  ]
  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
