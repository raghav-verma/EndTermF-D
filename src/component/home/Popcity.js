import React from "react";


function Popcity() {
  return (
    <section className="popucities">
      <div className="container">
        <div className="clearfix">
          <div className="section-heading">
            <h3 className="home-section-main-heading">Popular Cities</h3>
            <span>Trending Now</span>
          </div>
          <div className="popcity">
            <div className="city1">

              {/* <div className="blackOverlay"></div> */}
              <img
                src="https://kreatecube.com/usefull/Common/2/271.jpg"
                alt="Property in Gurugram"
                // layout="fill"
                style={{
                  height: "100%", width: "100%"
                }}

              />
              <h3>Gurugram</h3>

            </div>
            <div className="city2">
              <img
                src="https://3.imimg.com/data3/VL/AV/MY-1921873/noida-authority-building-noida-uttar-pradesh-india-500x500.jpg"
                alt="Property in Gurugram"
                // layout="fill"
                style={{
                  height: "100%", width: "100%"
                }}

              />
              <h3>Great Noida</h3>
            </div>
            <div className="city3">
              <img
                src="https://skylinearchitect.com/wp-content/uploads/2018/11/feature-51.jpg"
                alt="Property in Gurugram"
                // layout="fill"
                style={{
                  height: "100%", width: "100%"
                }}

              />
              <h3>Lucknow</h3>
            </div>
            <div className="city4">
              <img
                src="https://newprojects.99acres.com/projects/surya_nestbuild_limited/surya_digha_compound/images/1.jpg"
                alt="Property in Gurugram"
                // layout="fill"
                style={{
                  height: "100%", width: "100%"
                }}

              />
              <h3>Patna</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popcity;
