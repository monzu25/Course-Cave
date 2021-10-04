import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CoursesGalary from '../CoursesGalary/CoursesGalary';


const Courses = () => {

    const [courses, setCourses] = useState([])


    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, [])



    return (
        <div>

            <div className="container my-5">

                <Row xs={1} md={3} className="g-4">

                    {

                        courses.map(course => <CoursesGalary key={course.cid} course={course} ></CoursesGalary>)
                    }
                </Row>
            </div>

        </div>

    );
};

export default Courses;