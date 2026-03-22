// import React from 'react'
// import { useAuthContext } from '../../context/AuthContext';
// import useConversation from '../../zustand/useConversation';
// import { extractTime } from '../../utils/extractTime';

// const Message = ({message}) => {
//   const {authUser} = useAuthContext();
//   const {selectedConversations} = useConversation();
//   const fromMe= message.senderId === authUser._id;
//   const formattedTime = extractTime(message.createdAt);
//   const chatClassName = fromMe ? 'chat-end' : 'chat-start';
//   const profilePic = fromMe ? authUser.profilePic : selectedConversations.profilePic;
//   const bubbleBgColor = fromMe ? 'bg-blue-500 text-white' : '';


//   return (

//     <div className={`chat ${chatClassName}`}>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                  <img
//         alt="Tailwind CSS chat bubble component"
//         src={profilePic}
//       />
//             </div>
//         </div>
//         <div className= {`chat-bubble ${bubbleBgColor} wrap-break-word max-w-xs`}>{message.message}</div>
//                 <div className= 'chat-footer text-xs flex gap-1 items-center text-gray-400'>{formattedTime}</div>


//     </div>
//   )
// }

// export default Message



import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  
  //const fromMe = message.senderId === authUser._id;
  // Add .toString() or use == to ensure the comparison works even if types differ
const fromMe = message.senderId?.toString() === authUser?._id?.toString();
  
  const formattedTime = extractTime(message.createdAt);
 // const formattedTime = message.createdAt ? extractTime(message.createdAt) : "...";
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500 text-white' : ' ';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt="User profile"
            src={profilePic}
          />
        </div>
      </div>

      {/* CHANGE: Use 'break-words' instead of 'wrap-break-word' 
         to ensure the bubble stays within its max-width.
      */}
      <div className={`chat-bubble ${bubbleBgColor} wrap-break-word max-w-[70%] md:max-w-xs`}>
        {message.message}
      </div>

      <div className='chat-footer opacity-100 text-[10px] font-medium flex gap-1 items-center text-white mt-1 pb-1'>
  {formattedTime}
</div>
    </div>
  )
}

export default Message;