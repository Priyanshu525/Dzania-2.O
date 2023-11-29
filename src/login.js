import React from 'react'
import Google from './google.png'
import Nav from './nav'


export default function login() {
  return (
    <>
    <Nav/>


{/* --------------------------------------------BODY-------------------------------------------- */}

<h1 className='d-flex  justify-content-center'>
    LOG IN
</h1>
<div className='d-flex  justify-content-center'>

<div className='d-flex cont justify-content-center'>
  <button className='btn1'>
    <span>Continue Via </span>
<span><img src={Google} id="google" alt="" /></span>
  </button>

<h3 className='my-3'>or</h3>
<input className='logininput ' type="email" placeholder='email' />
<div>
<input className='logininput ' type="password" name="" id=""  placeholder='password'/><br />
<a href="#">Forgot Password</a>
</div>
<button className='btn' style={{margin:"auto"}}>Continue</button>
<span className='d-flex lower my-4'><span style={{fontWeight:200}}>Not a member</span> <span className='mx-2' style={{fontSize:1.2+"rem"}}>JOIN</span></span>
</div>

</div> 
    </>
  )
}
