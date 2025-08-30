// create a counter usingUseEffect 

import React from 'react'
import { useState, useEffect } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0);
    const [colorIndex, setColorIndex] = useState(0)
    const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500"];

    function onClickChange() {
        setCount(prev => prev + 1);
        setColorIndex(prev => (prev + 1) % colors.length);
    }


    useEffect(() => {
        console.log("Click on add button to add number by 1");
    }, [count]);

    return (
        <div className='p-20 flex flex-col gap-10 justify-center items-center'>
            <h1 className={`text-4xl ${colors[colorIndex]}`} >{count} </h1>
            <button onClick={onClickChange} className='h-15 w-25 border-2 rounded-lg '>Increment</button>
        </div>
    )
}

export default Counter;
