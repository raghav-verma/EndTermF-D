import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../../component/home/Footer';
import Navbars from '../../component/home/Navbar';
import { RealEstates } from '../../realEstate';

export default function Detail() {

    const navigate = useNavigate();
    const { id } = useParams();


    const [image, setImage] = useState("");
    const [project, setProject] = useState({});


    useEffect(() => {
        if (id) {
            setProject(RealEstates.find((obj) => obj.id == id));
            setImage(RealEstates.find((obj) => obj.id == id).coverImage);
        }
    }, [id]);



    return (
        <div className="home">
            <>
                <Navbars />
                <main style={{ padding: "5rem 3rem" }} className="item">
                    <section className="img">
                        <img src={image} alt="" className="img-main" />
                        <div className="img-btns">
                            {project?.images?.map((item) => {
                                return (
                                    <button onClick={() => {
                                        setImage(item.sURL)
                                    }} className="img-btn">
                                        <img
                                            src={item.sURL}
                                            alt="shoe product image"
                                            className="img-btn__img"

                                        />
                                    </button>
                                )
                            })}


                        </div>
                    </section>
                    <section className="price">
                        <h2 className="price-sub__heading">{project?.builderName}</h2>
                        <h1 className="price-main__heading">{project?.name}</h1>
                        <p className="price-txt">
                            <div className="col-sm-12 col-md-12">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8" style={{ display: "flex" }}>
                                        <b>Location: </b><div className="search-project-addres ellipsis ml-1" style={{ marginLeft: '5px' }}>{project.address}</div>
                                    </div>
                                    <div className="col-sm-4 col-md-4 right-align-text">
                                        {project.sold && <label className="label label-danger-outline">Sold Out</label>}
                                    </div>
                                </div>
                                <div className="row margin-topbottom-row">
                                    <div className="col-sm-12 col-md-12">
                                        <div className="row">
                                            <div className="col-sm-4 col-md-12 container-4">
                                                <b>Size: </b>
                                                {project.sizeRange}
                                                {project.sizeRange === 'Available on request' && <div className="container-4-title unit-list">
                                                    Available on request
                                                </div>}


                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 forInline">
                                        <div className="devdetail forInline" style={{ display: "flex" }}>
                                            <b style={{ width: "22%" }}>Developed by: </b>
                                            <div className="project-developer-title ellipsis">{project.builderName}</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </p>
                        <div className="price-box">
                            <div className="price-box__main">
                                <span className="price-box__main-new">{project.priceRange === 'Price on request' ? "Price on request" : project.priceRange}</span>
                            </div>
                        </div>
                        <div className="price-btnbox">

                            <button onClick={() => {
                                toast("We will contact you soon!");
                                navigate('/thankyou');
                            }} className="price-cart__btn btn--orange">

                                Contact Us
                            </button>
                        </div>
                    </section>
                </main>
                <Footer />
            </>

        </div>
    );
}
