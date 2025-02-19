import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
     <div className="container">
      <div className="row">
      <div className="col-lg-4">
        <ul>
          <h4> Essential Information</h4>
          <li>© 2025 Nuray Aliyeva – All rights reserved.</li>
          <li>Email: eliyeva05nuray@gmail.com</li>
          <li>Phone:+994 51 331 77 28</li>
      </ul>
      </div>

      <div className="col-lg-4">
        <h4>Navigation</h4>
        <li><Link to={'/'} className='links-foot'>#Home</Link></li>
        <li><Link to={'/works'} className='links-foot'>#Works</Link></li>
        <li><Link to={'/skills'} className='links-foot'>#Skills</Link></li>
        <li><Link to={'/sertificate'} className='links-foot'>#Certificates</Link></li>
        <li><Link to={'/cv'} className='links-foot'>#Cv</Link></li>
      </div>

      <div className="col-lg-4">
        <h4>Social Media Links</h4>
        <li>Linkedin:</li>
        <li>Github:</li>
        <li>Facebook:</li>
        <li>Instagram:</li>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Footer