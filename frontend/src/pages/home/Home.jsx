// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messages/MessageContainer'

// const Home = () => {
//   return (
//     <div className='flex h-screen overflow-hidden'>
//       <div className='w-1/4 bg-gray-800'>
//         <Sidebar/>
//       </div>
//       <div className='flex-1 bg-gray-900'>
//         {/* Message Container will go here */}
//         <MessageContainer/>
//         <div className='flex items-center justify-center h-full'>
//           <h1 className='text-white text-2xl'>Welcome to ChatApp</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    /* 1. sm:h-[450px] md:h-[550px] locks the height so it doesn't push up.
       2. overflow-hidden ensures the sidebar/messages handle their own scrolls.
    */
    <div className='flex sm:h-112.5 md:h-150 w-full max-w-225 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-2xl'>
      
      {/* Sidebar - fixed width */}
      <div className='border-r border-slate-500 p-4 flex flex-col h-full overflow-hidden'>
        <Sidebar />
      </div>

      {/* MessageContainer - takes up the rest of the space */}
      <div className='flex-1 flex flex-col h-full overflow-hidden'>
        <MessageContainer />
      </div>

    </div>
  );
};

export default Home;