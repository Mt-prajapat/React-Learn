import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex justify-between items-center gap-10 h-[90-vh]  px-18'>
      <LeftContent/>
      <RightContent users = {props.users} tag = {Element.tag}/>
    </div>
  )
}

export default Page1Content
