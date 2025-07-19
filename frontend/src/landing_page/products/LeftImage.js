import React from "react";

const LeftImage = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="conatiner " >
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL} className="p-5"></img>
        </div>
        <div className="col-6 mr-5" style={{paddingRight:"200px", paddingTop:"100px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:'none', marginRight:"50px"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-5">
            <a href={googlePlay} style={{ marginRight:"50px"}}>
              <img src="media\images\googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img src="media\images\appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
