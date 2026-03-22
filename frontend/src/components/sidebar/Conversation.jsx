
// import React from 'react'
// import useConversation from '../../zustand/useConversation'
// import { useSocketContext } from '../../context/SocketContext';

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//   // 1. CHANGE: Use singular naming to match the updated Zustand store
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   // 2. IMPROVEMENT: Use String() comparison for more reliable ID matching
//   const isSelected = selectedConversation?._id === conversation._id;

//   const { onlineUsers } = useSocketContext();
//   // 3. IMPROVEMENT: Convert to string to ensure the .includes() finds the ID
//   const isOnline = onlineUsers.includes(String(conversation._id));

//   return (
//     <>
//       <div
//         className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
//           ${isSelected ? 'bg-sky-500' : ''}`}
//         // 4. CHANGE: Use the updated setter function
//         onClick={() => setSelectedConversation(conversation)}
//       >
//         {/* avatar online/offline classes from daisyUI */}
//         <div className={`avatar ${isOnline ? 'online' : ''}`}>
//           <div className='w-12 rounded-full'>
//             <img src={conversation.profilePic} alt="user avatar" />
//           </div>
//         </div>

//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>{conversation.fullname}</p>
//             <span className='text-xl'>{emoji}</span>
//           </div>
//         </div>
//       </div>

//       {!lastIdx && <div className='divider my-0 py-0 h-1' />}
//     </>
//   );
// };

// export default Conversation;


import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation, messages } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(String(conversation._id));

  // LOGIC: Check if the last message in the global state was sent by THIS conversation
  // and we haven't selected them yet.
  const lastMessage = messages[messages.length - 1];
  const hasNewMessage = lastMessage?.senderId === conversation._id && !isSelected;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer transition-all
          ${isSelected ? 'bg-sky-500' : ''} 
          ${hasNewMessage ? 'bg-slate-700 animate-pulse' : ''}`} // Visual cue for new message
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className='w-12 rounded-full relative'>
            <img src={conversation.profilePic} alt="user avatar" />
            
            {/* NEW: Red notification dot if they sent a message */}
            {hasNewMessage && (
              <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-500"></span>
            )}
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className={`font-bold ${hasNewMessage ? 'text-white' : 'text-gray-200'}`}>
                {conversation.fullname}
            </p>
            <span className='text-xl'>{hasNewMessage ? "📩" : emoji}</span>
          </div>
          
          {/* NEW: Subtext to show a hint of a new message */}
          {hasNewMessage && (
            <p className='text-[10px] text-sky-400 font-bold animate-bounce'>New Message!</p>
          )}
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;