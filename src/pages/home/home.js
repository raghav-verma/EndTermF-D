import FeaturedProjects from "../../component/home/FeaturedProjects";
import Navbars from "../../component/home/Navbar";
import React, { useState, useEffect } from "react";
import Search from "../../component/home/Search";
import VirtualTour from "../../component/home/VirtualTour";
import Testimonial from "../../component/home/Testimonial";
import Estimate from "../../component/home/Estimate";
import MobileMockup from "../../component/home/MobileMockup";
import Rcards from "../../component/home/Rcards";
import Popcity from "../../component/home/Popcity";
import HomeDecor from "../../component/home/HomeDecor";
import Footer from "../../component/home/Footer";


function Home(params) {


    const [checkStatus, setCheckStatus] = useState(false);



    setTimeout(function () {
        setCheckStatus(true);
    }, 100);



    return (
        <div className="home">
            <Navbars />
            <section className="page-section search-section" id="banner-section">
                <div className="container">
                    <div className="search-form">
                        <h1 className="banner-heading">Find Your Dream Home</h1>
                        <Search header={false} />
                    </div>
                    <div className="mouse-icon">
                        <div className="wheel"></div>
                        <div className="txt">scroll down to view more</div>
                    </div>
                </div>
                <div className="video-banner-bg" id="home-page-banners">
                    <img
                        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80"

                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </section>
            <Popcity />
            {checkStatus ? <FeaturedProjects /> : null}
            <VirtualTour />
            <HomeDecor />
            <Rcards />
            <Testimonial />
            <Estimate />
            <MobileMockup />
            <section className="tagline bg-home-h1 ng-scope">
                <h1 className="text">India’s best property search website</h1>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
