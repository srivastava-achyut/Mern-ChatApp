// import React from 'react'
// import { BsSend } from "react-icons/bs";
// import { useState } from 'react';
// import useSendMessage from '../../hooks/useSendMessage';
// const MessageInput = () => {
//      const [message,setMessage] = useState("");
//         const {sendMessage,loading} = useSendMessage();
//     const handleSubmit =async (e) => {
//         e.preventDefault();
//         if(!message) return;
//         await sendMessage(message);
//         setMessage("");
//     }
//   return (
//    <form className='px-4 my-3'onSubmit={handleSubmit}>
//     <div className='w-full relative'>
//         <input type="text"
//         className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
//         placeholder='Send a Message'
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type='submit' className='absolute inset-y-0 inset-e-0 flex items-center pe-3'>
//           {loading ? <div className='loading loading-spinner'></div> : <BsSend/>}
//         </button>
//     </div>
//    </form>
//   )
// }

// export default MessageInput




import React from 'react'
import { BsSend } from "react-icons/bs";
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className='px-2 sm:px-4 py-2 sm:py-3 border-t border-slate-600' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input type="text" className='border text-xs sm:text-sm rounded-lg block w-full p-2 sm:p-2.5 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-sky-500 focus:outline-none' placeholder='Send a message' value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 text-gray-400 hover:text-sky-500 transition-colors' disabled={loading}>
          {loading ? <div className='loading loading-spinner loading-xs'></div> : <BsSend className="text-sm sm:text-base" />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
