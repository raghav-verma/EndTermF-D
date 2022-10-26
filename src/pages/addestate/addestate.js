import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/login.png';
import Footer from '../../component/home/Footer';
import Navbars from '../../component/home/Navbar';

export default function RealEstate() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            navigate('/thankyou');

        }

        setValidated(true);
    };

    return (
        <div className="home">
            <Navbars />
            <div style={{ display: "flex", width: "100%", height: "100vh", padding: "50px 0px" }} className="realestate-form">
                <div style={{ width: "100%", height: "100vh", backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%" }}></div>
                <div style={{ width: "100%", padding: "50px 20px" }}>
                    <Form style={{ background: "white", padding: "20px", height: "100%" }} noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Property name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Property name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Builder name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Builder name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Address</Form.Label>
                                <InputGroup hasValidation>

                                    <Form.Control
                                        type="text"
                                        placeholder="Address"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />

                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>Price Range</Form.Label>
                                <Form.Control type="text" placeholder="Price Range" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Price Range.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Size Range</Form.Label>
                                <Form.Control type="text" placeholder="Size Range (0-9999)" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Size Range.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Cover Image</Form.Label>
                                <Form.Control type="file" placeholder="City" required />

                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Inner Images</Form.Label>
                                <Form.Control type="file" placeholder="Inner Images" required />

                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                        </Row>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    );
}