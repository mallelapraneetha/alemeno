import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom"

const CourseDetails = () => {
    const {id} = useParams();
    const APIRes = localStorage.getItem("APIres");
    const courseData = JSON.parse(APIRes);
    const thisCourse = courseData.find(course => course.id === id);
    // console.log(id)
  return (
    <Container>
        <h1>Course Details</h1>
        <Link to="/">Back to Course List</Link>
        <Row>
            <Col>
            <Card style={{ width: '50rem' }}>
                
                <Card.Body>
                    <Card.Text>Course Name:{thisCourse.courseName}</Card.Text>
                    <Card.Text>Instructor: {thisCourse.instructor}</Card.Text>
                    <Card.Text>Description: {thisCourse.description}</Card.Text>
                    <Card.Text>Enrollement Status: {thisCourse.estatus}</Card.Text>
                    <Card.Text>Course duration: {thisCourse.courseDuration}</Card.Text>
                    <Card.Text>Schedule: {thisCourse.shedule}</Card.Text>
                    <Card.Text>Location: {thisCourse.location}</Card.Text>
                    <Card.Text>Pre-requisites: {thisCourse.prerequisites}</Card.Text>
                    <Card.Text>Syllabus as an expandable item: {thisCourse.syllabus}</Card.Text>

                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default CourseDetails