import React, { useRef } from 'react'
import { X } from 'lucide-react';

function Modal({onClose}) {

    const modalRef = useRef(); 
    const CloseModal =(e) =>{
         if(modalRef.current === e.target){
            onClose()
         }
    }


  return (
    <div
    onClick={CloseModal}
    ref={modalRef} 
     className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className="relative mt-10 flex-col gap-5 text-white">
        <button 
        onClick={onClose}
        className='absolute top-5 right-0 p-3'>
          <X size={30} />
        </button>

        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex-col gap-5 items-center my-4">
          <h2 className='text-3xl font-extrabold'>Modal ochildi</h2>
          <button
            onClick={onClose}
          className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black justify-between'>
            Close <X />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
