import React, { useState, useRef, useEffect } from "react";

// function InputFocus() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus(); // directly focus the input
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type here..." />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }
// export default InputFocus;




function RenderCounter() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <div>
            <p>Button clicked: {count} times</p>
            <p>Component rendered: {renderCount.current} times</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
export default RenderCounter;