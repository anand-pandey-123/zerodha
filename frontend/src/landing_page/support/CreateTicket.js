import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="text-muted fs-5">
          To create a ticket, select a relevant topic
        </h1>
      </div>
      <div className="row">
        <div className="col-4 p-5 mt-2">
          <h4 className="fs-5">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            Account Opening
          </h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Resident individual</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Minor</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Glossary</a><br></br>
        </div>
        <div className="col-4 p-5 mt-2">
          <h4 className="fs-5">
            {" "}
            <i class="fa fa-user-o" aria-hidden="true"></i>
            Your Zerodha Account
          </h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Account modification</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of securities</a><br></br>
        </div>
        <div className="col-4 p-5 mt-2">
          <h4 className="fs-5"><i class="fa fa-bar-chart" aria-hidden="true"></i>
 Kite</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Charts and orders</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Alerts and Nudges</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>General</a><br></br>

        </div>
      </div>

      <div className="row">
        <div className="col-4 p-5 mt-2">
          <h4 className="fs-5">
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            Funds
          </h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add money</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Withdraw money</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Add bank accounts</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>eMandates</a><br></br>
        </div>
        <div className="col-4 p-5 mt-2">
          <h4 className="fs-5">
            {" "}
            <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
             Console
          </h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate actions</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Profile</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Segments</a><br></br>

        </div>
        <div className="col-4 p-5 mt-2">
          <h4 className="fs-5"><i class="fa fa-circle-thin" aria-hidden="true"></i>
  Coin</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual funds</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Features on Coin</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Payments and Orders</a><br></br>
              <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>General</a><br></br>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
