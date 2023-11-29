import React from 'react'
import img1 from './person.png'
import img2 from './Ellipse.png'
import img3 from './3dicons2.png'

export default function home2() {
  return (
    <>
    < div className='page2 d-flex flex-column justify-content-center pg3' style={{backgroundColor:"#080808"}}>
        <div className=''>
<h2 id='head2'>
We know you are a great <br /> designer
</h2>
<h3 id='present'>
Present Your Work

</h3>
<button className='btnn d-flex justify-content-center'>POST</button></div>
<img src={img1} alt=""  className='imgpg21' />
<img src={img2} alt="" className='imgpg22'  />
<img src={img3} alt="" className='imgpg23'  />
</div>
 
    </>
  )
}
