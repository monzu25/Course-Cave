import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../Data/courseload';
import CoursesGalary from '../CoursesGalary/CoursesGalary';

const Home = () => {

    const [courses] = useCourses();
    console.log(courses.length);

    return (
        <div>
            <div className="container my-5">

                <Row xs={1} md={3} className="g-4">

                    {

                        courses.slice(0, 4).map(course => <CoursesGalary key={course.cid} course={course} ></CoursesGalary>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Home;