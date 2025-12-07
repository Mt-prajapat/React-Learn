import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/Navbar.jsx'
import Chapter2 from './components/Chapter2.jsx'
import Chapter3 from './components/Chapter3.jsx'
import Button from './components/button/Button.jsx'
import Header from './components/header/Header.jsx'
const App = () => {
  const name = 'Manan'
  const age = 22
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Cloud Support Associate",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "1 month ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "10 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "4 weeks ago",
      post: "Autopilot Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "2 days ago",
      post: "Prompt Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBY-eXtYgDiVRKWHuKPJqWYGyPBOo3j-tUfQ&s",
      companyName: "IBM",
      datePosted: "3 weeks ago",
      post: "Backend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Chennai, India"
    }
  ];
  console.log(jobOpenings)

  return (
    <>
      {Navbar()}
      <div className='card'>
        <h3>{name} - {age}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus doloribus possimus velit sed quam delectus ex iusto dolorem magni libero in at, incidunt architecto error rem. Possimus, maiores molestiae.</p>
      </div>
      {Card()}
      <div className='prachapter'>
        <Chapter2 user='Manan' age='20' img='https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Chapter2 user='Manan Prajapat' age='22' img='https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>


      <div style={{color:'white',padding:'20px'}}>
        {jobOpenings.map(function(elem,idx){
          return <div key={idx}>
            <Chapter3 company = {elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1 = {elem.tag1} pay={elem.pay} brandLogo={elem.brandLogo} tag2 = {elem.tag2}/>
          </div>
        })}
      </div>
      <Header/>
      <Button/>
      <div className='h-screen w-full bg-gray-500'>
        App
      </div>
    </>
  )
}

export default App
