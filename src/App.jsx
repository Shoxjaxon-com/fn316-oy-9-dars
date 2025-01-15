// 1-topshiriq

// import React from 'react';
// import { useRef } from 'react';

// function App() {
//   const nameRef = useRef('');
//   const emailRef = useRef('');

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   function handleSave(e) {
//     e.preventDefault();

//     if (!nameRef.current.value || nameRef.current.value.trim().length < 3) {
//       alert('Ism eng kamida 3 ta belgidan iborat bo‘lishi kerak!');
//       nameRef.current.focus();
//       return;
//     }

//     const email = emailRef.current.value;
//     if (!email.trim()) {
//       alert("Emailni kiriting!");
//       emailRef.current.focus();
//       return;
//     }

//     if (!validateEmail(email)) {
//       alert("To‘g‘ri email formatini kiriting! (masalan: example@domain.com)");
//       emailRef.current.focus();
//       return;
//     }

//     const user = {
//       name: nameRef.current.value,
//       email: emailRef.current.value,
//     };

//     console.log("Yangi foydalanuvchi:", user);

//     nameRef.current.value = '';
//     emailRef.current.value = '';
//   }

//   return (
//     <div>
//       <form className="border border-indigo-950 w-96 block m-auto mt-20 p-10 rounded">
//         <input
//           className="border border-indigo-950 rounded mb-3 p-1"
//           type="text"
//           placeholder="Enter your name..."
//           ref={nameRef}
//         />
//         <input
//           className="border border-indigo-950 rounded p-1 block mb-5"
//           type="email"
//           placeholder="Enter your email ..."
//           ref={emailRef}
//         />
//         <button
//           className="border border-indigo-950 rounded px-3 m-auto"
//           onClick={handleSave}
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

  // 2-topshiriq

  // import React,{useState} from 'react'
  
  // function App() {
  //   const [id, setID] = useState(1);
  // const randomNumber = Math.floor(Math.random() * 100);

  // function hendalClisk(value) {
  //   setID(randomNumber);
  //   console.log(id);
  // }

  // const images = `https://picsum.photos/id/${id}/500/300`;

  //   return (
  //     <div className='h-screen flex items-center gap-6  text-white justify-center'>
  //       <button className='border-4 border-cyan-400 p-3 rounded-lg bg-cyan-400 text-white flex'
  //       onClick={hendalClisk}>Previous</button>
  //       <img src={images} alt="" />
  //       <button className='border-4 border-cyan-400 p-3 rounded-lg bg-cyan-400 text-white flex'
        
  //       onClick={hendalClisk}>Next</button>
  //     </div>
  //   )
  // }
  
  // export default App
  


// 3-toshiriq

import React, { useState } from "react";
import Modal from "./coponets/Modal";
function App() {

    const[ShowModal,setShowModal] = useState(false)

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
      <h1 className="text-5xl font-bold mt-4">
        React Modal Tutorial
      </h1>
      <button 
      onClick={()=>{setShowModal(true)}}
      className="border-4 border-cyan-400 p-3 rounded-lg bg-cyan-400 text-white m-auto flex mt-5">
        Open Modaly
      </button>
      {ShowModal && <Modal onClose={()=>setShowModal(false)}/>}
    </div>
  );
}

export default App;                 


