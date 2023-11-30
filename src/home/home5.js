import React from 'react'
import box1 from './box1.png'
import box2 from './box2.png'
import box3 from './box3.png'
import pg6 from './pg6.png'
// import Footer from "./footer"

export default function home5() {
  return (
    <>
      
      <div className='pg5 d-flex justify-content-center bg-none'>
        {/* <img src={backg} className='backg' alt="" /> */}
        <ul className='pg5ul'>
            <li><a href="#"><img src={box1} alt="" /></a></li>
            <li><a href="#"><img src={box2} alt="" /></a></li>
            <li><a href="#"><img src={box3} alt="" /></a></li>
        </ul>
      </div>
      <div className='pg6div'>
        <img   src={pg6} className='pg6' alt="" />
      </div>
      {/* <Footer/> */}
    </>
  )
}
