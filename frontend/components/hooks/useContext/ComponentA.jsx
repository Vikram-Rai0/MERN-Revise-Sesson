import React from 'react'
import { useState } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    const [user, setUser] = useState("Vikram")
    return (
        <div className=" border-2 p-10">
            <h1>i am component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB user={user} />
        </div>
    )
}

export default ComponentA