import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './CoursesGalary.css';
const CoursesGalary = (props) => {

    const { name, duration, fee, rating, img } = props.course;

    console.log(name);
    return (
        <Col>
            <Card className="shadow  mb-3 bg-body rounded bg-light">
                <Card.Img variant="top" height="225px" src={img} />
                <Card.Body >
                    <Card.Title style={{ minHeight: "50px" }} >{name}</Card.Title>
                    <Card.Text>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>

                        </Rating>
                    </Card.Text>
                    <div className="duration-fee">
                        <Card.Text className="duration-full" > <span className="duration">Duration: <i class="far fa-clock"></i> </span> {duration}</Card.Text>
                        <Card.Text> <span className="fee">Fee:</span> $ {fee}</Card.Text>
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
    );
};

export default CoursesGalary;