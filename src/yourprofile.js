import React from 'react'
import ppic from './mypic.jpg'
import rpic from './adoniss.jpg'
import facebook from './Facebook.png'
import insta from './Instagram.png'
import linkdn from './LinkedIn.png'
import dribble from './Dribbble.png'
import behance from './Behance.png'
import figma from './Figma.png'
import xd from './Adobe XD.png'
import sketch from './Sketch.png'
import design from './Adobe Indesign.png'
import photoshop from './Adobe Photoshop.png'


export default function yourprofile(props) {
  return (
    <>
      <div className='profilecont'>
        {/* left---------------------------------- */}
        <div classNacme='pleft'>
          <div >
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li><img src={ppic} alt="" id='ppic' /></li>
              <li style={{ marginLeft: 4 + "rem" }}><h2 id='Name'>Priyanshu Sharma</h2></li>
            </ul>
          </div>
          <div>
            <p className='bio'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nesciunt laudantium omnis expedita neque alias deleniti delectus eveniet harum! Dolore doloremque itaque consectetur illo, excepturi quaerat sit temporibus, corporis a, voluptatibus sunt.</p>
          </div>
          <div className='connect'>


            <div id='connect'>Connect</div>
            <div className='sociallink' style={{ display: "flex", justifyContent: "center" }}>
              <div><img src={behance} alt="" /></div>
              <div><img src={dribble} alt="" /></div>
              <div><img src={facebook} alt="" /></div>
              <div><img src={linkdn} alt="" /></div>
              <div><img src={insta} alt="" /></div>
            </div>
          </div>

          <div className='tools'>
            <div className='font1' id='font'>Tools</div>
            <div id='tools' style={{ display: "flex", alignContent: "center" }}>
              <div><a href=""><img src={figma} alt="" /></a></div>
              <div><a href=""><img src={xd} alt="" /></a></div>
              <div><a href=""><img src={sketch} alt="" /></a></div>
              <div><a href=""><img src={design} alt="" /></a></div>
              <div><a href=""><img src={photoshop} alt="" /></a></div>
            </div>
            <div className='mostused'>
              <span id='font'>Most Used Tools</span>
              <div id='mostusedtools' >
                <a href=""><img src={figma} alt="" /></a>
                <a href=""><img src={xd} alt="" /></a>
              </div>
            </div>

          </div>
          <div className='stats'>

              <div className='font2'>Stats</div>
            <div style={{padding:1+"rem"}}>
              <div ><span className='font2'>No of Posts <span className='box'>87</span></span></div>
              <div ><span className='font2'>No of Participations <span className='box'>94</span></span></div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div >
        {/* right----------------------------------- */}
        <div classNacme='pright'>
          <img id='rpic' src={rpic} alt="" />
        </div>
      </div>


      {/* posts------------------------------------------------ */}
      <div></div>
    </>
  )
}
