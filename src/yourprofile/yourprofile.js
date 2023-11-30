import React from 'react'
import ppic from './mypic.jpg'
import rpic from './adoniss.png'
import facebook from './Facebook.png'
import insta from './Instagram.png'
import linkdn from './LinkedIn.png'
import posts from './posts.png'
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
          <p className='propfilepara'>"Designing interfaces isn't just about pixels; it's about creating experiences that leave a lasting impression."</p>
        </div >

        {/* right----------------------------------- */}
        <div className='pright'>
          <div><img className='rpic' src={rpic} alt="" /></div>
          <div className='rankdiv'><span>RANK - {props.rank}</span></div>
          <div className='participation'>
            <span >No. Of Competitions<br />Participated -
</span><span id='compspan'>32</span></div>
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
            <h3 className='rankdiv'>Achievements</h3>
            <ul className='ulprofile'>
              <li>{props.achieve1}</li>
              <li>{props.achieve2}</li>
              <li>{props.achieve3}</li>
              <li>{props.achieve4}</li>
              <li>{props.achieve5}</li>
              <li>{props.achieve6}</li>
            </ul>


          </div>
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
            <h3 className='rankdiv' >STREAK</h3>
            <div style={{display:"flex",flexDirection:"column"}}><div style={{display:"flex",justifyContent:"space-between",width:20+"rem"}}> <span className='greyfont'>Current Streak -</span><span className='littlebox'>{props.streak}</span></div>
            <div style={{display:"flex",justifyContent:"space-between",width:20+"rem"}} className='greyfont'>Max Streak - <span className='littlebox'>{props.maxstreak}</span></div></div>
          </div>
        </div>
      </div>


      {/* posts------------------------------------------------ */}
      <div className='posts'>
        {/* map -------------------------------- */}
        {/* let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg]) */}

<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
<div className='postimg'><img src={posts} alt="" /></div>
      </div>
    </>
  )
}
