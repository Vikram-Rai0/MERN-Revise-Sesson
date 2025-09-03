//example props passing

import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className=" border-2 p-10 ">
      <h1>i am component B</h1>
      <ComponentC />
    </div>
  )
}

export default ComponentB

