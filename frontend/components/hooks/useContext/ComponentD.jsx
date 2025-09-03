// example Props passing

// import React from 'react'
// // import ComponentA from './ComponentA'
// const ComponentD = (props) => {
//     return (
//         <div className="border-2 p-10">
//             <h1>i am component D</h1>
//             <h2>{props.user}</h2>
//             {/* <ComponentA /> */}
//         </div>
//     )
// }

// export default ComponentD


import React from 'react'
import { useContext } from 'react';
import { UserContext } from './ComponentA';

const ComponentD = () => {
    const user = useContext(UserContext);
    return (
        <div className="border-2 p-10 ">
            <h1>i am component C</h1>
            <h1>{`Direct passed form component 'A'  ${user}`}</h1>
        </div>
    )
}

export default ComponentD
