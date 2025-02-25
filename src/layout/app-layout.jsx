import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className=''>
        <main className='min-h-screen container mx-auto px-20 '>
            {/* header */}
            <Header/>
            <Outlet/>
        </main>
        {/* footer */}
        <div className='p-10 text-center bg-gray-800 mt-10'>
            Made with ❤️ By Rishabh Rai
        </div>
    </div>
  )
}

export default AppLayout