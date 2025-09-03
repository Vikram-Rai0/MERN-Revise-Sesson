//useContext() = unlike Props to pass value from one component to another component 
// we have to pass to each component step by step to reach destination component, 
// React Hook that allows you to share values between multiple levels of components 
// without passing props through each level

//PROVIDER COMPONENT
//1. import {createContext} from 'react'
//2.export const MyContext = createContext();
//3.<MyContext.Provider>

// CONSUMER COMPONENTS
//1. import React, { useContext } from 'React';
//   import {MyContext }  = createContext();
//   <Chile/>
//2. const value = usecontext(MyContext);


// Example Props passing

// import React from "react";
// import { useState } from "react";
// import ComponentB from "./ComponentB";

// const ComponentA = () => {
//     const [user, setUser] = useState("Vikram");
//     return (
//         <div className=" border-2 p-10">
//             <h1>i am component A</h1>
//             <h2>{`Hello ${user}`}</h2>
//             <ComponentB user={user} />
//         </div>
//     );
// };

// export default ComponentA;

import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("Vikram");

  return (
    <div className="border-2 p-10">
      <h1>I am Component A</h1>
      <h2>{`Hello ${user}`}</h2>

      {/* Provide the user value to the entire tree */}
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
