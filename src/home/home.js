import React from 'react'
import Nav from '../nav'
import hack from './hackathon.png'
import hack1 from './hack1.png'
import blurry from './blurry1.png'
import Home1 from "./home2"
import img1 from './person.png'
import img2 from './Ellipse.png'
import img3 from './3dicons2.png'

import figma from './3dicons.png'
import group from './Group.png'

export default function home() {
  return (
<>
      <Nav/>
     <div>
<div className='crousel'>
<ul style={{listStyle:"none", display:"flex"}} className='d-flex justify-content-center'>
  <li><img src={hack} alt="" /></li>
  <li></li>
  <li></li>
  </ul></div>
  <div className='d-flex justify-content-center'>
   <a href="" className='join'style={{borderRadius:20+"px"}}><span className='borderbtn'>JOIN US</span></a> 
  </div>
     
     </div>
     <ul className='d-flex'style={{
      listStyle:"none"
     }}>
    <li><img className='group' src={group} alt="" style={{zIndex:2}} /></li>
    <li><img src={blurry} className='blurry' alt="" style={{zIndex:1}} /></li>
    <li><img  className='figma' src={figma} alt=""  style={{zIndex:2}}/></li>
    </ul>
     {/* -----------------------PAGE2------------------------------- */}
     <div>
     <h2 id='head2'>
We know you are a great <br /> designer
</h2>
<h3 id='present'>
Present Your Work

</h3>

<div className='d-flex justify-content-center' style={{textDecoration:"none"}}> <a href="" className='post' > POST</a></div>
<img src={img1}  className="imgpg21" alt="" />

     </div>
</>
    
  )
}
