import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className=' bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
               <h1 className='text-3xl font-bold text-[#00FF9D] font-mono tracking-tighter'>
                ThinkBoard
               </h1>
               <div className='flex items-center gap  -4'>
             <Navbar/>
             </div>
             </div>
        </div>
    </header>
  )
}

export default Header