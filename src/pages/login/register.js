import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import logo from '../../assets/login.png'
import './login.css';
import { toast } from 'react-toastify';



function Register() {

    const navigat = useNavigate();


    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);


        if (data.get("pass") != data.get("re_pass")) {
            toast.error("Confirm password and your password is not matching");
            return;
        }
        if (data.get("pass") == "" || data.get("re_pass") == "" || data.get("email") == "" || data.get("name") == "") {
            toast.error("Please fill all fields");
            return;
        }


        let vals = {
            name: data.get('name'),
            type: data.get("type"),
            email: data.get("email"),
            password: data.get("pass"),

        }

        let dat = [];


        if(localStorage.getItem("login")) {
            dat = JSON.parse(localStorage.getItem("login"));
            dat.push(vals);
        }
        else {
            dat.push(vals);

        }

        localStorage.setItem("login", JSON.stringify(dat));
        navigat('/login');

    }



    return (



        <section className="signup" style={{ backgroundImage: "url('https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/construction1.jpg')" }}>
            <div className="containersss">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form onSubmit={submit} className="register-form" id="register-form">
                            <div className="form-group">
                                <label className='loginlabel' htmlFor="name"><MdOutlineAccountCircle style={{ fontSize: "1.5em" }} /></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <p>User Type</p>
                                <select style={{ width: "100%", padding: "5px 10px", marginTop: "10px" }} name="type">
                                    <option value="seller">Seller</option>
                                    <option value="buyer">Buyer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className='loginlabel' htmlFor="email"><AiOutlineMail style={{ fontSize: "1.5em" }} /></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label className='loginlabel' htmlFor="pass"><BsKey style={{ fontSize: "1.5em" }} /></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label className='loginlabel' htmlFor="re-pass"><BsKey style={{ fontSize: "1.5em" }} /></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={logo} width={250} alt="sing up image" /></figure>
                        <Link to="/login" className="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>




    )
}

export default Register;