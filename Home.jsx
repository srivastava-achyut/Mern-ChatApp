// import React from 'react';
// import './Home.css';

// const Home = () => {
//     return (
//         <div className="home-container">
//             <header className="header">
//                 <h1>Welcome to Mern Chat App</h1>
//             </header>
//             <main className="main-content">
//                 {/* Flexible content goes here */}
//                 <div className="chat-area">
//                     {/* Chat messages will be rendered here */}
//                 </div>
//                 <div className="input-area">
//                     <input type="text" placeholder="Type a message..." className="input-field" />
//                     <button className="send-button">Send</button>
//                 </div>
//             </main>
//             <footer className="footer">
//                 <p>© 2026 Mern Chat App</p>
//             </footer>
//         </div>
//     );
// };

// export default Home;

//update this code for responsiveness

import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex w-full h-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-2xl'>
      
      <div className={`${sidebarOpen ? 'absolute md:static' : 'hidden'} md:flex border-r border-slate-500 w-full md:w-64 lg:w-72 h-full bg-gray-900 md:bg-transparent z-50 md:z-auto transition-all duration-300 flex-col`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {sidebarOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 md:hidden z-40" onClick={() => setSidebarOpen(false)} />
      )}

      <div className='flex-1 flex flex-col h-full overflow-hidden w-full relative'>
        <div className='md:hidden flex items-center justify-between bg-slate-800 p-3 border-b border-slate-600'>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className='text-white text-xl'>
            {sidebarOpen ? '✕' : '☰'}
          </button>
          <h1 className='text-white font-bold text-sm'>ChatApp</h1>
          <div className='w-6'></div>
        </div>
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
