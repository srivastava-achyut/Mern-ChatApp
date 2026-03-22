// // import React, { useEffect } from 'react'
// // import Messages from './Messages'
// // import MessageInput from './MessageInput'
// // import { TiMessages } from 'react-icons/ti'
// // import useConversation from '../../zustand/useConversation'
// // import {useAuthContext } from '../../context/AuthContext'

// // const MessageContainer = () => {
// //   const {selectedConversations,setSelectedConversations} = useConversation();

// //   useEffect(()=>{
// //     return ()=>{
// //       setSelectedConversations(null)
// //     }
// //   },[setSelectedConversations])

// //   return (
// //     <div className='md:min-w-112.5 flex flex-col h-full'>
// //       {!selectedConversations ? <NoChatSelected/> : (
// //           <>
// //           {/* Header */}
// //           <div className='bg-slate-500 px-4 py-2 mb-2'>
// //             <span className='label-text'>To:</span>
// //             <span className='text-gray-900 font-bold'>{selectedConversations.fullname}</span>
// //           </div>
// //           <Messages/>
// //           <MessageInput/>
// //           </>
// //       )}
// //     </div>
// //   )
// // }

// // export default MessageContainer

// // const NoChatSelected = () => {
// //   const { authUser } = useAuthContext();
// //   return(
// //    <div className='flex items-center justify-center w-full h-full'>
// //     <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col
// //     items-center gap-2'>
// //       <p>Welcome {authUser.fullname}</p>
// //       <p>Select a chat to start messaging</p>
// //       <TiMessages className='text-3xl md:text-6xl text-center'/>

// //     </div>
// //    </div>

// //   )

// // }

// import React, { useEffect } from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import { TiMessages } from 'react-icons/ti'
// import useConversation from '../../zustand/useConversation'
// import { useAuthContext } from '../../context/AuthContext'

// const MessageContainer = () => {
//   const { selectedConversations, setSelectedConversations } = useConversation();

//   useEffect(() => {
//     // Cleanup function (unmount)
//     return () => setSelectedConversations(null);
//   }, [setSelectedConversations]);

//   return (
//     <div className='md:min-w-112.5 flex flex-col h-full'> 
//       {!selectedConversations ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* Header - Fixed height */}
//           <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text'>To:</span>{" "}
//             <span className='text-gray-900 font-bold'>{selectedConversations.fullname}</span>
//           </div>

//           {/* FIX STARTS HERE: 
//              The wrapper below takes all remaining vertical space (flex-1) 
//              and handles scrolling internally (overflow-auto).
//           */}
//           <div className='flex-1 overflow-auto'>
//             <Messages />
//           </div>

//           {/* Input - Stay at the bottom */}
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// };

// export default MessageContainer;

// const NoChatSelected = () => {
//   const { authUser } = useAuthContext();
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋 {authUser?.fullname} ❄</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   );
// };



import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
  // FIX: Removed 's' from selectedConversation and setSelectedConversation
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // Cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    // md:min-w-[450px] is standard; 112.5 might not be in your tailwind config
    <div className='md:min-w-112.5 flex flex-col h-full'> 
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
          </div>

          {/* Wrapper handles scrolling */}
          <div className='flex-1 overflow-auto'>
            <Messages />
          </div>

          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser?.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};