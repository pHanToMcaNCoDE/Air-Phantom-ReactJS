import React from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div>
      <div className='navbar flex'>
        <div className='navBarOne flex'>
            <div>
                <SiConsul/>
            </div>

            <div className='flex'>
                <li className='flex'> <BsPhoneVibrate/> Support</li>
                <li className='flex'> <BsGlobe/> Languages</li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
