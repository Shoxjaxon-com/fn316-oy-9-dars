// 1-topshiriq

import React from 'react';
import { useRef } from 'react';

function App() {
  const nameRef = useRef('');
  const emailRef = useRef('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  function handleSave(e) {
    e.preventDefault();

    if (!nameRef.current.value || nameRef.current.value.trim().length < 3) {
      alert('Ism eng kamida 3 ta belgidan iborat bo‘lishi kerak!');
      nameRef.current.focus();
      return;
    }

    const email = emailRef.current.value;
    if (!email.trim()) {
      alert("Emailni kiriting!");
      emailRef.current.focus();
      return;
    }

    if (!validateEmail(email)) {
      alert("To‘g‘ri email formatini kiriting! (masalan: example@domain.com)");
      emailRef.current.focus();
      return;
    }

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    console.log("Yangi foydalanuvchi:", user);

    nameRef.current.value = '';
    emailRef.current.value = '';
  }

  return (
    <div>
      <form className="border border-indigo-950 w-96 block m-auto mt-20 p-10 rounded">
        <input
          className="border border-indigo-950 rounded mb-3 p-1"
          type="text"
          placeholder="Enter your name..."
          ref={nameRef}
        />
        <input
          className="border border-indigo-950 rounded p-1 block mb-5"
          type="email"
          placeholder="Enter your email ..."
          ref={emailRef}
        />
        <button
          className="border border-indigo-950 rounded px-3 m-auto"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;

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

// import React, { useState } from "react";
// import Modal from "./coponets/Modal";
// function App() {

//     const[ShowModal,setShowModal] = useState(false)

//   return (
//     <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
//       <h1 className="text-5xl font-bold mt-4">
//         React Modal Tutorial
//       </h1>
//       <button 
//       onClick={()=>{setShowModal(true)}}
//       className="border-4 border-cyan-400 p-3 rounded-lg bg-cyan-400 text-white m-auto flex mt-5">
//         Open Modaly
//       </button>
//       {ShowModal && <Modal onClose={()=>setShowModal(false)}/>}
//     </div>
//   );
// }

// export default App;        

// 4-topshiriq


// import React, { useRef, useState } from 'react';

// function ProgressBar() {
//   const progressRef = useRef(null);
//   const [progress, setProgress] = useState(0);

//   const handleAddProgress = () => {
//     if (progress < 100) {
//       setProgress(prev => prev + 10);
//     }
//   };

//   const handleReset = () => {
//     setProgress(0);
//   };

//   const getColor = () => {
//     if (progress <= 50) return 'bg-green-500';
//     if (progress <= 99) return 'bg-yellow-500';
//     return 'bg-red-500';
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4 mt-8">
//       <div className="w-full max-w-md">
//         <div className="relative pt-1">
//           <div className="flex mb-2 justify-between">
//             <span>Progress</span>
//             <span>{progress}%</span>
//           </div>
//           <div className="flex mb-2 h-2 bg-gray-200 rounded-full">
//             <div
//               ref={progressRef}
//               className={`h-full rounded-full transition-all duration-300 ${getColor()}`}
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex space-x-4">
//         <button
//           onClick={handleAddProgress}
//           className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
//           disabled={progress === 100}
//         >
//           Add Progress
//         </button>
//         <button
//           onClick={handleReset}
//           className="bg-gray-500 text-white py-2 px-4 rounded"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProgressBar;

// 5-topshiriq

// import React, { useEffect, useRef, useState } from 'react';

// function ScrollAnimation() {
//   const cardRefs = useRef([]);
//   const [inView, setInView] = useState([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleCards = entries.map((entry, index) =>
//           entry.isIntersecting ? index : null
//         ).filter((val) => val !== null);
//         setInView((prev) => [...new Set([...prev, ...visibleCards])]);
//       },
//       { threshold: 0.5 }
//     );

//     cardRefs.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       cardRefs.current.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   const cards = [
//     "Content of the first card. This content will fade in and slide up when scrolled into view.",
//     "Content of the second card. This content will fade in and slide up when scrolled into view.",
//     "Content of the third card. This content will fade in and slide up when scrolled into view.",
//   ];

//   return (
//     <div className="flex flex-col items-center mt-8 space-y-8">
//       {cards.map((content, index) => (
//         <div
//           key={index}
//           ref={(el) => (cardRefs.current[index] = el)}
//           className={`transition-all transform duration-500 ${
//             inView.includes(index)
//               ? 'translate-y-0 opacity-100'
//               : 'translate-y-20 opacity-0'
//           } bg-white shadow-lg p-6 rounded-lg max-w-md w-full`}
//         >
//           <h2 className="text-xl font-semibold">Card {index + 1}</h2>
//           <p className="text-gray-600">{content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ScrollAnimation;



