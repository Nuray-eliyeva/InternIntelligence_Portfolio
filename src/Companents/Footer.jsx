import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
     <div className="container">
      <div className="row">
      <div className="col-lg-4 ">
        <ul className='fot-item'>
          <h4> Essential Information</h4>
          <li>© 2025 Nuray Aliyeva – All rights reserved.</li>
          <li>Email: eliyeva05nuray@gmail.com</li>
          <li>Phone:+994 51 331 77 28</li>
      </ul>
      </div>

      <div className="col-lg-4 fot-item">
        <h4>Navigation</h4>
        <li><Link to={'/'} className='links-foot'>#Home</Link></li>
        <li><Link to={'/works'} className='links-foot'>#Works</Link></li>
        <li><Link to={'/skills'} className='links-foot'>#Skills</Link></li>
        <li><Link to={'/sertificate'} className='links-foot'>#Certificates</Link></li>
        <li><Link to={'/cv'} className='links-foot'>#Cv</Link></li>
      </div>

      <div className="col-lg-4 fot-item ">
        <h4>Social Media Links</h4>
        <li><a href="www.linkedin.com/in/nuray-əliyeva-05abc" className='links-foot'><CiLinkedin  className='icon'/>Linkedin</a></li>
        <li><a href="https://github.com/Nuray-eliyeva" className='links-foot'><FaGithub  className='icon'/>Github</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=61563257062630" className='links-foot'><FaFacebookF  className='icon'/>Facebook</a></li>
        <li><a href="https://www.instagram.com/justnur_05/" className='links-foot'><FaInstagram  className='icon'/>Instagram</a></li>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Footer