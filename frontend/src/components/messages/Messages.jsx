

import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeletons';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  // Scroll to bottom whenever messages change
  useEffect(() => {
    // A tiny timeout ensures the DOM has finished painting the new message
    const timeoutId = setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [messages]);

  return (
    /* CHANGE: Remove 'flex-1' and 'overflow-y-auto' from here.
       The parent (MessageContainer) now handles the scroll box.
       This prevents the "double scrollbar" and layout jumping.
    */
    <div className='px-4 flex flex-col gap-4'> 
      {!loading && messages.length > 0 && messages.map((message, idx) => (
        <div 
          key={message._id} 
          ref={idx === messages.length - 1 ? lastMessageRef : null}
        >
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-gray-400 text-center mt-10'>
          Send a message to start the conversation!
        </p>
      )}
    </div>
  );
};

export default Messages;