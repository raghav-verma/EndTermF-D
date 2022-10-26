import React from "react";

function MobileMockup() {
  return (
    <div className="mobileMain">
      <div className="container">
        <div className="clearfix">
          <div className="mobilemockup">
            <div className="mobileimage">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
                alt="mybuild mobile app"
                layout="intrinsic"
                width={702}
                height={690}
              />
            </div>
            <div className="mobiledetails">
              <div className="section-heading">
                <h3 className="home-section-main-heading-mobile">
                  mybuild: Find Homes
                  <br />
                  On The Go
                </h3>
              </div>
              <div>
                <p className="downloadDetails">
                  Our beautiful app makes it super convenient for you to look
                  for homes on the go. Pick a few of your favourite properties
                  and get in touch with our Relationship Manager with a single
                  tap.
                </p>
              </div>
              <div className="downBtn">
                <button className="Gplay">
                  <span className="icon">
                    <i className="icon-google-play"></i>
                  </span>
                  <div className="content">
                    <div className="lbl">Get it on</div>
                    <div className="value">Google Play</div>
                  </div>
                </button>
                <button
                  className="Gplay"
                >
                  <span className="icon">
                    <i className="icon-apple"></i>
                  </span>
                  <div className="content">
                    <div className="lbl">Download on the</div>
                    <div className="value">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMockup;
