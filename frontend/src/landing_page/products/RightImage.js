import React from 'react'

const RightImage = ({
  imageURL,
  productName,
  productDescription,
  learnMore
}) => {
  return (
    <div className="conatiner" style={{width:"95%"}} >
      <div className="row">
        
        <div className="col-6  mr-5"style={{paddingLeft:"100px", paddingTop:"150px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-6" style={{}}>
          <img src={imageURL} ></img>
        </div>
      </div>
    </div>
  )
}

export default RightImage
