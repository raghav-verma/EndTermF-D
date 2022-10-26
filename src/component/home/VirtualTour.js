import React from "react";


function VirtualTour() {
  return (
    <div>
      <div className="parent">
        <div className="div2">
          <img
            src="https://media.istockphoto.com/photos/we-all-deserve-a-fresh-break-from-the-city-picture-id1326994520?b=1&k=20&m=1326994520&s=170667a&w=0&h=h9h0d6bcN0Mrr2S7iVzS331BM7U8G3XyCWiVeVjh-AI="
            width={800}
            height={700}

          />
        </div>
        <div className="div1">
          <div className="virtualTourDetail">
            <h2>Virtual Tours</h2>
            <p>
              View home with our 360<sup>o</sup> 3D virtual tour
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default VirtualTour;
