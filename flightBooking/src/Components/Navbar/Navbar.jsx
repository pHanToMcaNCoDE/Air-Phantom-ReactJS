import React, {useState} from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'
import logo from '../../assets/logo.jpg'
import {CgMenuGridO} from 'react-icons/cg'

const Navbar = () => {

    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = () => {
        setActive('navBarMenu')
    }



  return (
      <div className='navBar flex'>

        <div className='navBarOne flex'>
            <div>
                <SiConsul className='icon'/>
            </div>

            <div className='none flex'>
                <li className='flex'>           
                    <BsPhoneVibrate className='icon'/> 
                    Support
                </li>
                <li className='flex'> 
                    <BsGlobe className='icon'/> 
                    Languages
                </li>
            </div>

            <div className='atb flex'>
                <span>Sign In</span>
                <span>Sign Out</span>
            </div>
        </div>

        <div className='navBarTwo'>
            <div className='logoDiv'>
                <img src={logo} className='Logo' alt='Air Phantom'></img>
            </div>

            <div className={active}>
                <ul className='menu flex'>
                    <li onClick={removeNavBar} className='listItem'>Home</li>
                    <li onClick={removeNavBar} className='listItem'>About</li>
                    <li onClick={removeNavBar} className='listItem'>Offers</li>
                    <li onClick={removeNavBar} className='listItem'>Seats</li>
                    <li onClick={removeNavBar} className='listItem'>Destinations</li>
                </ul>

                <button onClick={removeNavBar} className='btn flex btnOne'>
                    Contact
                </button>
            </div>


            <button className='btn flex btnTwo'>
                Contact
            </button>

            <div onClick={showNavBar} className='toggleIcon'>
                <CgMenuGridO className='icon'/>
            </div>
        </div>
      </div>
  )
}

export default Navbar

