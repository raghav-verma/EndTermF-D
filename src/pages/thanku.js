import React from 'react';
import { Link } from 'react-router-dom';

export default function Thanku() {
    return (
        <div className="content">
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <h1 className='h1'>Thank you !</h1>
                    <p>Thanks for submitting request to add your estate.</p>
                    <p>you should receive a confirmation email soon</p>
                    <Link to='/'><button className="go-home">go home</button></Link>
                </div>
                <div className="footer-like">
                    <p>
                        We will get back to you soon
                    </p>
                </div>
            </div>
        </div>
    );
}
