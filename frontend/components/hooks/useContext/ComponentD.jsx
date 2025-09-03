import React from 'react'
// import ComponentA from './ComponentA'
const ComponentD = (props) => {
    return (
        <div className="border-2 p-10">
            <h1>i am component D</h1>
            <h2>{props.user}</h2>
            {/* <ComponentA /> */}
        </div>
    )
}

export default ComponentD
