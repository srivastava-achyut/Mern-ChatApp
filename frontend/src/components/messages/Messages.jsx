import React from 'react'
import { useEffect,useRef } from 'react';
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeletons';
const Messages = () => {
  const {messages,loading}=useGetMessages();
 const lastMessageRef = useRef();
 useEffect(()=>{
   lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-y-auto flex flex-col'>
      {!loading && messages.length > 0 && messages.map((message,idx)=>(
          <div key={message._id}
          ref={idx === messages.length - 1 ? lastMessageRef : null}>
             <Message  message={message}/>
          </div>
      ))}
      {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)}
      {!loading &&  messages.length === 0 && (
       
          <p className='text-gray-500 text-lg'>No messages yet. Start the conversation!</p>
      
      )}
    </div>
  )
}

export default Messages