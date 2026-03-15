import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='w-1/4 bg-gray-800'>
        <Sidebar/>
      </div>
      <div className='flex-1 bg-gray-900'>
        {/* Message Container will go here */}
        <MessageContainer/>
        <div className='flex items-center justify-center h-full'>
          <h1 className='text-white text-2xl'>Welcome to ChatApp</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
