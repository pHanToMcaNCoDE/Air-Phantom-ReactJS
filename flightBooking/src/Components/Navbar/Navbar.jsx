import React from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'
import logo from '../../assets/logo.ai'
import {BsGrid3X3GapFill} from 'react-icons/bs'

const Navbar = () => {
  return (
      <div className='navbar flex'>

        <div className='navBarOne flex'>
            <div>
                <SiConsul className='icon'/>
            </div>

            <div className='none flex'>
                <li className='flex'> <BsPhoneVibrate className='icon'/> Support</li>
                <li className='flex'> <BsGlobe className='icon'/> Languages</li>
            </div>

            <div className='atb flex'>
                <span>Sign In</span>
                <span>Sign Out</span>
            </div>
        </div>

        <div className='navBarTwo'>
            <div className='logoDiv'>
                <img src={logo} className='logo' alt='Air Phantom'></img>
            </div>

            <div className='navBarMenu'>
                <ul className='menu flex'>
                    <li className='listItem'>Home</li>
                    <li className='listItem'>About</li>
                    <li className='listItem'>Offers</li>
                    <li className='listItem'>Seats</li>
                    <li className='listItem'>Destinations</li>
                </ul>

                <button className='btn flex btnOne'>
                    Contact
                </button>
            </div>

            <div className='toggleIcon'>
                <BsGrid3X3GapFill/>
            </div>

            {/* <button className='btn flex btnOne'>
                    Contact
                </button> */}
        </div>
      </div>
  )
}

export default Navbar
