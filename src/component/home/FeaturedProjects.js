import Carousel from "react-multi-carousel";
import React, { useState, useEffect } from "react";
import { RealEstates } from "../../realEstate";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function FeaturedProjects() {


  const [projectListing, setProjectListing] = useState([]);

  useEffect(() => {
    setProjectListing(RealEstates);
  }, [])

  return (
    <div>
      <section className="home-section" id="featured-section">
        <div className="container">
          <div className="clearfix">
            <div className="section-heading">
              <h3 className="home-section-main-heading">Featured Projects</h3>
              <span>Handpicked projects for you in Panchkula</span>
            </div>
          </div>
          <div className="popular-cities-area featured-city-area new-featured-projects">
            <div className="row projectSlider">
              {projectListing && projectListing.length ? (
                <Carousel
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={false}
                  customTransition="all .5"
                  transitionDuration={false}
                  containerClass="carousel-container"
                  // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                  // dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {projectListing?.filter((item, index) => index < 10)?.map((project, index) => {

                    console.log(project)
                    return (
                      <div className="col-xs-12 inside-project" key={index}>
                        <div style={{ display: "inline" }} className="carousel-item card-box hovered">
                          <a>
                            <div className="item-image image-masked-new">
                              <img
                                src={project.coverImage}
                                alt={project.name}
                                style={{ height: "40vh", width: "272px" }}
                              />
                            </div>
                            <div className="item-info">
                              <h3 className="item-title ellipsis">
                                {project.name}
                              </h3>
                              <div className="builderName">
                                {"by " + project.builderName}
                              </div>
                              {project.priceRange != "Price on request" ? (
                                <div className="item-price">
                                  <i className="icon-rupee"></i>
                                  {project.priceRange}
                                </div>
                              ) : (
                                <div className="item-price">Price on request</div>
                              )}
                            </div>
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </Carousel>
              ) : (
                "No data"
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProjects;
