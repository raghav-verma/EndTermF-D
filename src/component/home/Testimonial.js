import React from "react";
import Carousel from "react-multi-carousel";

function Testimonial() {
  return (
    <div className="testimonial-section">
      <section className="home-section" id="featured-section">
        <div className="container">
          <div className="testimonialHeading">
            <div className="section-heading-testimonial">
              <h2 className="testimonialHead">
                Customer
                <br />
                Testimonials
              </h2>
              <hr className="orangeLine" align="left" />
            </div>
          </div>
          <div className="testimonials">
            <div className="customervideo">
              <div className="clientDetails">
                <Carousel
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 1,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 1,
                    },
                  }}
                  showDots
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      Thank you so much mybuild for your efforts in helping us
                      to find our first home.
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">
                        Mohit Tripathi &amp; Priyanka
                      </div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner, Shri Radha Aqua Garden
                        </span>
                        <br />
                        Noida
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      What they said they delivered, 100% clarity and
                      transparency and absolutely no ambiguity at any stage of
                      transaction.
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">Rakesh Dwivedi</div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at M3M Woodshire
                        </span>
                        <br />
                        Gurugram
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      They have handled all my queries with professionalism
                      &amp; promptness.
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">
                        Paritosh Gupta &amp; Preeti
                      </div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at M3M Woodshire
                        </span>
                        <br />
                        Noida
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      mybuild really know about what customers exactly want.
                      Their services are really good.
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">Tanmoy Burman</div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at Ace City
                        </span>
                        <br />
                        Greater Noida
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <div className="meta clicworthDetails">
                      We are able to close the deal very quickly only because of
                      mybuild. Thank you from the bottom of my heart.
                    </div>
                    <div className="testimonial-image image">
                      <img
                        alt=""
                        src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                        width={75}
                        height={75}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="testimonial-text">
                      <div className="customer">Vikalp Saxena</div>
                      <span className="date text-uppercase">
                        <span className="small-text">
                          Property owner at Ace City
                        </span>
                        <br />
                        Greater Noida
                      </span>
                    </div>
                  </div>
                </Carousel>
                <div className="reviews">
                  {/* <div className="testimonial-play">
                    <span className="play-circle-testimonial">
                      <i className="icon-caret-right"></i>
                    </span>
                  </div> */}
                  <img
                    alt=""
                    src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                    width={75}
                    height={75}
                    layout="intrinsic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
