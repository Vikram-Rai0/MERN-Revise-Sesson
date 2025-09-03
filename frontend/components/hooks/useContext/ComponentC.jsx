import React from 'react'
import ComponentD from './ComponentD'
const ComponentC = (props) => {
  return (
    <div className="border-2 p-10 ">
      <h1>i am component C</h1>
      <ComponentD user={props.user} />
    </div>
  )
}

export default ComponentC
