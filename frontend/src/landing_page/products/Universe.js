import React from 'react'

const Universe = () => {
  return (
    <div className="conatiner p-5" >
      <div className="row text-center p-5">
         <h1 className='mb-3'>The Zerodha Universe</h1>
         <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className='col-4 p-3'>
            <img src="media/images/smallcaseLogo.png" ></img>
            <p className='text-small text-muted text-center'>
            Thematic investing platform
            that helps you <br></br> invest in diversified
            baskets of stocks on ETFs.</p>
        </div>
        <div className='col-4 p-3'>
            <img src="media\images\streakLogo.png" style={{width:"40%"}} ></img>
             <p className='text-small text-muted text-center'>
            
            Systematic trading platform
            that allows you to create and backtest
            strategies without coding..</p>
        </div>
        <div className='col-4 p-3'>
            <img src="media\images\zerodhaFundhouse.png" style={{width:"50%"}}></img>
             <p className='text-small text-muted text-center'>
            
            Our asset management venture
            that is creating <br></br> simple and transparent index
            funds to help<br></br> you save for your goals.</p>
        </div>

        <div className='col-4 p-3 mt-5'>
            <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}></img>
            <p className='text-small text-muted text-center'>
            
            Options trading platform that lets you<br></br>
            create strategies, analyze positions, and examine<br></br>
            data points like open interest, FII/DII, and more.</p>
        </div>
        <div className='col-4 p-3 mt-5'>
            <img src="media\images\dittoLogo.png" style={{width:"30%"}}></img>
             <p className='text-small text-muted text-center'>         
              Personalized advice on life
              and health insurance. No spam
              and no mis-selling.</p>
        </div>
        <div className='col-4 p-3 mt-5'>
            <img src="media/images/goldenpiLogo.png" style={{width:"50%"}}></img>
             <p className='text-small text-muted text-center'>
            Bomds Trading Platform</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Universe
