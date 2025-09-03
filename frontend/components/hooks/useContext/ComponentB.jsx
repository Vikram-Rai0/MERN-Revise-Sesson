import React from 'react'
import ComponentC from './ComponentC'
const ComponentB = (props) => {
  return (
    <div className=" border-2 p-10 ">
      <h1>i am component B</h1>
      <ComponentC user={props.user}/>
    </div>
  )
}

export default ComponentB
