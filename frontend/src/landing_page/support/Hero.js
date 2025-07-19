import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid mb-5' id="supportHero">
      <div  className='p-5' id="supportwrapper">
            <h4>Support Portal</h4>
            <a href="">Track tickets</a>
      </div>
      <div className='row mb-5'id="firstrow">
         <div className='col-6 px-5'>
           <h3 className='fs-3'>Search for an answer or browse help topics to create a ticket</h3><br></br>
           <div style={{display:"flex"}}>
           <input type="text" placeholder='Eg. How do I activate F&O '></input>
           <button id="btn-search" className='text-muted'><i class="fa fa-search" aria-hidden="true"></i></button>
           </div>
            <br></br>
           <a href="" style={{marginRight:"20px"}}>Track account opening</a>
           <a href="" style={{marginRight:"20px"}}>Track segment activation</a>
           <a href=""  style={{marginRight:"30px"}}> Intraday margins</a><br></br>
           <a href="">Kite user manual</a>
           
         </div>
         <div className='col-6 px-5 mb-5'>
           <h3 className='fs-3'>Featured</h3>
           <ol>
             <li><a href="">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
             <li><a href=""> Revision in expiry day of Index and Stock derivatives contracts</a></li>
           </ol>
          
           
         </div>
      </div>
      
    </section>
  )
}

export default Hero
