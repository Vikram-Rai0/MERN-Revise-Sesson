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




function RenderCounter(){
  const [count ,setCount] = useState(0);
    const countRef = useRef(0)
   useEffect(()=>{
    console.log("component Renderd!");
   })
  function handleClick(){

     countRef.current+1;
     console.log(countRef.current);
    
  }
  return ( 
    <>
    <div className="count flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl">{count}</h1>
      <button onClick={handleClick} className="border-2 h-15 w-25 rounded-2xl">click!</button>
      </div>
      </>
  );
}
export default RenderCounter;


  // export default function ChatBox() {
  //   const [message, setMessage] = useState([]);
  //   const messageRef = useRef(null);
  //   const chatEndRef = useRef();

  //   function handleSubmitMessage() {

  //     if (messageRef.current.value.trim() === "") return;
  //     setMessage([...message, messageRef.current.value]);
  //     messageRef.current.value = "";

  //   }
  //   useEffect(
  //     () => {
  //       chatEndRef.current?.scrollIntoView({ behavior: "smooth" })


  //     }, [message]);

  //   return (
  //     <>
  //       <div className="main h-70 w-100 border-white border-2  ">
  //         <div className="chatbox h-[70%] w-full border-black border-2 overflow-y-auto 
  //   [scrollbar-width:none] [-ms-overflow-style:none] 
  //   [&::-webkit-scrollbar]:hidden">
  //           {message.map((msg, i) => (
  //             <p key={i} className="text-gray-300 text-xl gap-4">
  //               {msg}
  //             </p>
  //           ))}
  //           <div ref={chatEndRef} />
  //         </div>

  //         <div className="flex gap-4 p-4 ">
  //           <input type="text" ref={messageRef} className="border-none hover:shadow-md bg-gray-200 text-gray-700 rounded-md h-10 w-full" />
  //           <button onClick={handleSubmitMessage} className="border-2 border-blue-400 bg-blue-700 px-8 rounded-md  hover:bg-blue-600">Send</button>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }