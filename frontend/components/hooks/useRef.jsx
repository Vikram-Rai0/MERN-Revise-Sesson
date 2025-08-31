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




// function RenderCounter() {
//     const [count, setCount] = useState(0);
//     const renderCount = useRef(0);

//     useEffect(() => {
//         renderCount.current = renderCount.current + 1;
//     });

//     return (
//         <div>
//             <p>Button clicked: {count} times</p>
//             <p>Component rendered: {renderCount.current} times</p>
//             <button onClick={() => setCount(count + 1)}>+</button>
//         </div>
//     );
// }
// export default RenderCounter;

export default function ChatBox() {
  const [messages, setMessages] = useState(["Hello 👋", "How are you?"]);
  const inputRef = useRef(null);
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (inputRef.current.value.trim() === "") return;
    setMessages([...messages, inputRef.current.value]);
    inputRef.current.value = "";
  };

  // Auto scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className="h-60 overflow-y-auto border rounded p-2 bg-gray-50">
        {messages.map((msg, i) => (
          <p key={i} className="mb-1">
            {msg}
          </p>
        ))}
        <div ref={chatEndRef} /> {/* scroll target */}
      </div>

      <div className="flex mt-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
// 