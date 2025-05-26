import React from 'react'
import './Navfoot.css';

const Navbar = () => {
  return (
    <div className='logo'>
      <div>
        <h1 className='text'>LOGO</h1>
      </div>
      <div className='menubar'>
        <div className='menu-items'>
          <p className='btn1'>Menu Item</p>
          <p className='btn1'>Menu Item</p>
          <p className='btn1'>Menu Item</p>
          <p className='btn1'>Menu Item</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar