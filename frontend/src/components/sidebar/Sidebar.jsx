// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col h-full overflow-hidden'>
//         <SearchInput/>
//         <div className='divider px-3 '></div>
//         <Conversations/>
//         {/* <Conversation/> */}
//         <LogoutButton/> 
//     </div>
//   )
// }

// export default Sidebar


import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = ({ onClose }) => {
  return (
    <div className='flex flex-col h-full overflow-hidden w-full p-2 sm:p-3 border-r border-slate-500'>
      <div className='md:hidden flex justify-end mb-2'>
        <button onClick={onClose} className='text-white text-xl hover:bg-slate-700 p-2 rounded transition-colors'>✕</button>
      </div>
      <SearchInput />
      <div className='divider px-2 my-2 sm:my-3'></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
