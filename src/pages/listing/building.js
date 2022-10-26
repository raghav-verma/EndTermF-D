import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../../component/home/Footer';
import Navbars from '../../component/home/Navbar';
import { RealEstates } from '../../realEstate';

export default function Building() {

    const [realEstate, setRealEstate] = useState([]);

    const queryParams = new URLSearchParams(window.location.search)

    const navigate = useNavigate();

    useEffect(() => {
        if (queryParams.get("search") && queryParams.get("state")) {

            setRealEstate(RealEstates?.filter((item) => item?.name.toLowerCase().includes(queryParams.get("search").toLowerCase()) && item?.city.toLowerCase().includes(queryParams.get("state").toLowerCase())));
        }
        else {
            setRealEstate(RealEstates);

        }
    }, [])

    return (
        <div className="home">

            <Navbars />

            <div className="right-main-container">
                <ul className="city-list" style={{ listStyle: "none" }}>
                    {realEstate && realEstate.length > 0 && realEstate.map((project, index) => (
                        <li className='mt-2' key={'project' + index}>
                            <Link style={{ color: "gray", textDecoration: "none" }} to={`/detail/${project?.id}`}>

                                <div className="row">
                                    <div className="col-sm-4 col-md-4">
                                        <div className="image-masked-new project-new-grids">
                                            <img src={project.coverImage} className="img-responsive" alt={project.name} style={{ height: "29vh", width: "100%" }} />
                                            {(project.virtualTour || project.driveView || project.droneView) && <div className="view-layout-icon">
                                                <span className="virtual-360" title="Virtual Site Visit"><i className="icon-virtual-tour-new"></i></span>
                                            </div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-md-8">
                                        <div className="row">
                                            <div className="col-sm-8 col-md-8">
                                                <div className="search-project-title ellipsis">{project.name}</div>
                                                <div className="search-project-addres ellipsis"  >{project.address}</div>
                                            </div>
                                            <div className="col-sm-4 col-md-4 right-align-text">
                                                {project.priceRange === 'Price on request' ? <div className="project-price-range"><span className="project-price-range-content">Price on request</span></div> : <div className="project-price-range"><i className="icon-rupee"></i><span className="project-price-range-content">{project.priceRange}</span></div>}
                                                {project.sold && <label className="label label-danger-outline">Sold Out</label>}
                                            </div>
                                        </div>
                                        <div className="row margin-topbottom-row">
                                            <div className="col-sm-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-sm-4 col-md-12 container-4">
                                                        <div className="container-4-tagline">Size</div>
                                                        {project.sizeRange}
                                                        {project.sizeRange === 'Available on request' && <div className="container-4-title unit-list">
                                                            Available on request
                                                        </div>}


                                                    </div>
                                                    <div className="col-sm-4 col-md-4 container-4 no-leftright-border">
                                                        {!project.isFullyCommercial && <div className="container-4-tagline">Configuration</div>}
                                                        {project.propertyTypeRange !== 0 && <><div className="container-4-title">
                                                            {project.unit && project.unit.bed !== 0 && <span>{project.unit.bed}&nbsp;</span>}
                                                        </div></>}
                                                        {project.propertyTypeRange === 0 && <div className="container-4-title">
                                                            Available on request
                                                        </div>}

                                                        <div className="container-4-tagline">
                                                            {project.isFullyCommercial && project.typeLabel.bhkLabel !== 'Commercial' && <span>Commercial</span>}
                                                            {project.isFullyCommercial && project.typeLabel.bhkLabel === 'Commercial' && <span>&nbsp;</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 col-md-4 container-4">
                                                        <div className="container-4-tagline">Possession</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-8 col-md-8 forInline">
                                                <div className="devdetail forInline">
                                                    <div className="project-developer-tagline no-bottom-margin">Developed by</div>
                                                    <div className="project-developer-title ellipsis">{project.builderName}</div>
                                                </div>

                                            </div>
                                            <div className=" middleSec col-sm-4 col-md-4 right-align-text right ">

                                            </div>
                                            <div className="toRight">
                                                <div>
                                                    <button onClick={() => {
                                                        toast("We will contact you soon!");
                                                        navigate('/thankyou');
                                                    }} className="btn btn-primary enqFormBtn" type="button">CONTACT US</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>




            <Footer />

        </div>
    );
}
