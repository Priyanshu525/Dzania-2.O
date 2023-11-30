import React from 'react'
import Nav from '../nav'
import phead from './profilehead.png'

export default function profile() {
  return (
    <>
    <Nav/>
      <div className='profile'>
<h2 className='phead'>
   <img src={phead} alt="" />
</h2>
<div className='d-flex'>
{/* <img src="" id='profilepic' alt="Add image" /> */}
<button id='profilepic'> Add <br />Image</button>
<div className='d-flex flex-column'>
    <input type="text" name="" id=""  placeholder='Name'/>
    <input type="text" name="" id="bio" placeholder='Add Bio' />
</div>
</div>
{/* ---------------- */}
<div class= "container">
  <div class="select">
    <select>
      <option value="1">Americano</option>
      <option value="2">Latte</option>
      <option value="3">Green Tea</option>
    </select>
  </div>
  
</div> 
{/* ------------------- */}
<div class= "container">
  <div class="select">
    <select>
      <option value="1">Americano</option>
      <option value="2">Latte</option>
      <option value="3">Green Tea</option>
    </select>
  </div>
  
<input type="text" name="" id="lastinp" placeholder='Add your design quote' />
</div> 
{/* -------------------- */}
<button  id='profilebtn' style={{margin:"auto",marginTop:3+"rem",marginBottom:3.44+"rem"}}>Continue</button>
</div>





    </>
  )
}
