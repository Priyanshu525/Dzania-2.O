import React from 'react'
import png1 from './mask1.png'
import png2 from './mask2.png'
import png3 from './mask3.png'

export default function home3() {
  return (
    <>
     <div className='d-flex flex-column home3 justify-content-center' style={{backgroundColor:"#080808"}}>
        <h2 id='what' className='text-center'>What Is Dizania?</h2>
        <h3 id='p'>A platform for designers where they can</h3>
        <ul className='ulpg3'>
            <li><a href=""><div><span><img src={png1} alt="" /><span>particiapate in design competitions</span></span></div></a></li>
            <li><a href=""><div><span><img src={png2} alt="" /><span>upload your work</span></span></div></a></li>
            <li><a href=""><div><span><img src={png3} alt="" /><span>discover, there are many like you</span></span></div></a></li>
        </ul>
        </div> 
    </>
  )
}
