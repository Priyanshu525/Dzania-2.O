import React from 'react'
import Nav from '../nav'
import Footer from '../footer'

export default function create() {
  return (
    <>
    <div className='bodycreate'>
      <Nav/>
      {/* ---------------------------------------------- */}
      
      <div className='create d-flex flex-column justify-content-center'>
        <h1 className='createh1'>CREATE A NEW POST</h1>
        <div>
  <div class="mb-3 inpp">
   <a href="" style={{fontFamily:"Verdana"}}>Select from your computer</a>
  </div>
  <div class="mb-3 inpp">
   <a href=""  style={{fontFamily:"Verdana"}}>Select from your drive</a>
  </div>
  
  <button type="submit" class="btn upload ">UPLAOD</button>
</div>
      </div>
      </div> 
<Footer/>
    </>
  )
}
