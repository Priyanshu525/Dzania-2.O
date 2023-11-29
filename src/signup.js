import React from 'react'
import Logo from './logo.png'
import Google from './google.png'
import figma from './3dicons.png'


export default function signup() {
  return (
    <>
      {/* -------------------------------------------NAVBAR----------------------------------------------------------- */}
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#080808"}}>
  <div className="container-fluid">
    <a className="navbar-brand " href="#"><img src={Logo} className='logo' alt="Dizania" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className='d-flex justify-content-end'>

    
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
        <li className="nav-item">
          <a className="nav-link "  href="#">PARTICIPATE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="#">UPLOAD</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">DISCOVER</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href='#'>PROFILE</a>
        </li>
      </ul>
      <div className="d-flex" >
        <button className="btn" type="submit">Join Us</button>
      </div>
    </div>
    </div>
  </div>
</nav>



{/* --------------------------------------------BODY-------------------------------------------- */}

<span className='d-flex sign justify-content-center'>
SIGN UP</span>
<div className='d-flex  justify-content-center'>

<div className='d-flex cont justify-content-center'>
  <button className='btn1'>
    <span>Continue Via </span>
<span><img src={Google} id="google" alt="" /></span>
  </button>

<h3 className='my-2'>or</h3>
<input className='logininput1 ' type="name" placeholder='Name' />
<input className='logininput1 ' type="email" placeholder='User Name' />

<input className='logininput1 ' type="email" placeholder='Email' />


<div>
<input className='logininput1 ' type="password" name="" id=""  placeholder='Create Password'/><br />
<input className='logininput1 ' type="password" name="" id=""  placeholder='Re-enter Password'/><br />

</div>
<button className='btn' style={{margin:"auto"}}>Continue</button>
<img src={figma} alt="" className='figma' style={{height:4+"rem"}} />
</div>

</div> 
    </>
  )
}
