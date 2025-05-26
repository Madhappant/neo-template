import React from 'react'
import icon_taken from '../Assets/icon_taken.png'
import './pagecss.css'
import time from '../Assets/time.png'
import medal from '../Assets/medal.png'
import pen from '../Assets/pen.png'

const Info = () => {
  return (
    <div className='info-container'>
        <div className='info1'>
          <center><img src={icon_taken}></img>
          <h3>Goed<br></br>georganiseerd</h3>
          <p>Sodales id ullamcorper neque <br></br> imperdiet leo, fames massa</p>
          <button className='btn2'>Info</button>
          </center>
        </div>

         <div className='info1'>
          <center><img src={time}></img>
          <h3>Goed<br></br>georganiseerd</h3>
          <p>Sodales id ullamcorper neque <br></br> imperdiet leo, fames massa</p>
          <button className='btn2'>Info</button>
          </center>
        </div>

         <div className='info1'>
          <center><img src={medal}></img>
          <h3>Goed<br></br>georganiseerd</h3>
          <p>Sodales id ullamcorper neque <br></br> imperdiet leo, fames massa</p>
          <button className='btn2'>Info</button>
          </center>
        </div>

         <div className='info1'>
          <center><img src={pen}></img>
          <h3>Goed<br></br>georganiseerd</h3>
          <p>Sodales id ullamcorper neque <br></br> imperdiet leo, fames massa</p>
          <button className='btn2'>Info</button>
          </center>
        </div>
    </div>
  )
}

export default Info