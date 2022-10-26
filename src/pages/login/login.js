import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare } from 'react-icons/ai';
import logo from '../../assets/login.png'
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsKey } from 'react-icons/bs';
import './login.css';
import { toast } from 'react-toastify';
function Login() {

    const navigat = useNavigate();



    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);



        if (data.get("pass") == "" || data.get("email") == "") {
            toast.error("Please fill all fields");
            return;
        }




        let dat = [];


        if (localStorage.getItem("login")) {
            dat = JSON.parse(localStorage.getItem("login"));

            let obj = dat.find(o => o.email === data.get("email") && o.password === data.get("pass"));

            if (obj) {
                localStorage.setItem("logined", JSON.stringify(obj));
                navigat('/');

            }
            else {
                toast.error("Please enter valid credential");

            }
        }
        else {
            toast.error("Please register first");

        }


    }


    return (
        <section className="signup" style={{ backgroundImage: "url('https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/construction1.jpg')" }}>

            <div className="container containersss">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={logo} width={250} alt="sing up image" /></figure>
                        <Link to="/register" className="signup-image-link">Create an account</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form onSubmit={submit} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name" className='loginlabel'><MdOutlineAccountCircle style={{ fontSize: "1.5em" }} /></label>

                                <input type="text" name="email" id="your_name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass" className='loginlabel'><BsKey style={{ fontSize: "1.5em" }} /></label>

                                <input type="password" name="pass" id="your_pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term loginlabel"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><AiFillFacebook className='zmdi-facebook' style={{ fontSize: "1.5em" }} /></a></li>
                                <li><a href="#"><AiFillTwitterSquare style={{ fontSize: "1.5em" }} className='zmdi-twitter' /></a></li>
                                <li><a href="#"><AiFillGoogleSquare style={{ fontSize: "1.5em" }} className='zmdi-google ' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )

}

export default Login;