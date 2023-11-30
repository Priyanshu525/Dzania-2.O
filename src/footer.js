import React from 'react'
import Logo from './logo1.png'

export default function footer() {
  return (
    <>
      <div>
        <ul className='d-flex justify-content-between footer '>
        <img src={Logo} className='logo' alt="" />
         <ul className='d-flex footlist' style={{listStyle:"none"}}>  

            <a href=""><li>about</li></a>
            <a href=""><li>discover</li></a>
            <a href=""><li>ecstasyteam9@gmail.com</li></a></ul>
            <div className='d-flex justify-content-end'>
            <li className='socials'>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>            </li>
            </div>
        </ul>
      </div>
    </>
  )
}
