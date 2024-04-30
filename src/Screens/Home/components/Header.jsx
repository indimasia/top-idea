import React from 'react'
import logo from './../../../assets/react.svg'

function Header() {
  return (
    <div className='flex flex-row justify-between items-center shadow-lg border p-4 rounded-lg'>
        <button className="btn btn-primary btn-sm md:btn-md">+ New Idea</button>
        <h2 className="font-bold text-sm md:text-2xl">Top 20 Idea</h2>
        <div className='flex gap-2 items-center'>
            <img src={logo} alt="" className="w-10 h-10 rounded-full bg-pink-100" />
            <h2 className="font-bold text-sm hidden md:block">By <br></br> Dimas</h2>
        </div>
    </div>
  )
}

export default Header