import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className='row p-5 text-center mt-5 border-top'>
         <div className='col-8'>
           <a href="" style={{textDecoration:"none"}}> <h3 className='fs-5'>Brokerage calculator</h3></a>
           <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"14px"}} className='text-muted'>
             <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
             <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
             <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
             <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
             <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
             <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>
           </ul>
         </div>
          <div className='col-4'>
             <a href="" style={{textDecoration:"none"}}> <h3 className='fs-5'>List of charges</h3></a>
          </div>
      </div>
      
    </div>
  )
}

export default Brokerage
