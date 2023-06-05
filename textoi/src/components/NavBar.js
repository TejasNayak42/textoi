import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <div 
        className="navcontainer min-w-full"
        >
            <nav className="bg-sky-600  ">
                <ul className='flex p-3 '>
                      <img src="textoi.png"  alt='' height='50px' width='50px' />
                    <Link className=" ml-3 mr-5 mt-3 text-neutral-50 text-lg" to='/'>
                      <strong>textoi</strong>
                      </Link>
                    <Link className="max-[420px]:hidden ml-2 mr-5 mt-[0.85rem]"
                      to='/'>Home</Link>
                    <Link className="ml-2 mr-5 mt-[0.85rem] " to='/About'>About</Link>
                </ul>
            </nav>
        </div>
    </>
  )
}
