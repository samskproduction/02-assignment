import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="">
        <nav className="w-full sm:w-auto bg-black py-8 px-[5%]">
          <ul className='flex flex-wrap justify-center sm:justify-end gap-4 text-white text-lg sm:gap-6 md:gap-10 sm:text-xl md:text-2xl font-bold '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header
