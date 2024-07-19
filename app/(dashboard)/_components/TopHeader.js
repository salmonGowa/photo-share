import { UserButton } from '@clerk/nextjs'
import { AlignCenterHorizontal, AlignJustify } from 'lucide-react'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-5 border-b items-center justify-between
    md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <h3>PhotoShare</h3>
        <UserButton/>
    </div>
  )
}

export default TopHeader