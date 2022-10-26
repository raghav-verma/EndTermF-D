import React from "react";
import './Footer.css';

function Estimate() {
  return (
    <div className="mainestimate">
      <div className="container">
        <div className="clearfix">
          <div className="Estimate">
            <div className="EstimateDetails">
              <h2 className="estDetailHead">Build: Property Estimate</h2>
              <p>
                Simply fill in some basic details about the property and our AI
                (Artificial Intelligence) based unique valuation algorithm will
                calculate the most accurate valuation possible instantly.
              </p>
              <button className="estiamtebtn">get estimated value</button>
            </div>
            <div className="EstimateImage">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
                alt="EstimateImage"
                height={540}
                width={850}
                layout="fixed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
