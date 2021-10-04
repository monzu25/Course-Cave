import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './Teachers.css'


const Teacher = () => {
    return (
        <div className="container my-5">
            <h1>All our Teachers Profiles</h1>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="shadow  mb-3 bg-body rounded bg-light">
                        <Card.Img variant="top" height="225px" src="https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                        <Card.Body >
                            <Card.Title style={{ minHeight: "50px" }} >Jesika</Card.Title>
                            <Card.Text>
                                <Rating
                                    initialRating={4.60}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly>

                                </Rating>
                            </Card.Text>
                            <div className="duration-fee">
                                <Card.Text className="duration-full" > <span className="duration"> </span> 5 Years Experience</Card.Text>

                            </div>
                            <div className="social-icon">
                                <span> <FontAwesomeIcon size="2x" color="#4267B2" icon={faFacebook} /></span>
                                <span> <FontAwesomeIcon size="2x" color="#C13584" icon={faInstagram} /></span>
                                <span> <FontAwesomeIcon size="2x" color="#1DA1F2" icon={faTwitter} /></span>
                                <button type="button" class="btn btn-outline-secondary">Enroll Now  </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="shadow  mb-3 bg-body rounded bg-light">
                        <Card.Img variant="top" height="225px" src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                        <Card.Body >
                            <Card.Title style={{ minHeight: "50px" }} >Tunir Maa</Card.Title>
                            <Card.Text>
                                <Rating
                                    initialRating={4.60}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly>

                                </Rating>
                            </Card.Text>
                            <div className="duration-fee">
                                <Card.Text className="duration-full" > <span className="duration"> </span> 5 Years Experience</Card.Text>

                            </div>
                            <div className="social-icon">
                                <span> <FontAwesomeIcon size="2x" color="#4267B2" icon={faFacebook} /></span>
                                <span> <FontAwesomeIcon size="2x" color="#C13584" icon={faInstagram} /></span>
                                <span> <FontAwesomeIcon size="2x" color="#1DA1F2" icon={faTwitter} /></span>
                                <button type="button" class="btn btn-outline-secondary">Enroll Now  </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow  mb-3 bg-body rounded bg-light">
                        <Card.Img variant="top" height="225px" src="https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                        <Card.Body >
                            <Card.Title style={{ minHeight: "50px" }} >Chosma Ala</Card.Title>
                            <Card.Text>
                                <Rating
                                    initialRating={4.60}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly>

                                </Rating>
                            </Card.Text>
                            <div className="duration-fee">
                                <Card.Text className="duration-full" > <span className="duration"></span> 5 Years Experience</Card.Text>

                            </div>
                            <div className="social-icon">
                                <span> <FontAwesomeIcon size="2x" color="#4267B2" icon={faFacebook} /></span>
                                <span> <FontAwesomeIcon size="2x" color="#C13584" icon={faInstagram} /></span>
                                <span> <FontAwesomeIcon size="2x" color="#1DA1F2" icon={faTwitter} /></span>
                                <button type="button" class="btn btn-outline-secondary">Enroll Now  </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Teacher;