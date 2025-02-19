import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
      <div className="logo">Nuray  Aliyeva</div>
      <ul>
        <li><Link to={'/'} className='links-nav'>Home</Link></li>
        <li><Link to={'/works'} className='links-nav'>Works</Link></li>
        <li><Link to={'/skills'} className='links-nav'>Skills</Link></li>
        <li><Link to={'/sertificate'} className='links-nav'>Certificates</Link></li>
        <li><Link to={'/cv'} className='links-nav'>Cv</Link></li>
      </ul>
    </div>
  )
}

export default Navbar