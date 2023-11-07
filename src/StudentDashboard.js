import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

const StudentDashboard = () => {
    const [courses,setCourses] = useState([]);
    
    useEffect(() => {
        axios.get(`https://654886d7dd8ebcd4ab2304b7.mockapi.io/courses`)
        .then((response) => {
            console.log(response.data);
            setCourses(response.data);
        })
    }, []);
  return (
    <div>
        <Container>    
    <h1>Student Dashboard</h1><Link to="/">Course List</Link>
    
        <Row>
            {courses.map((data) => {
            return(
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Name: {data.student[0].Name}</Card.Title>
                <Card.Text>Course Name: {data.courseName}</Card.Text>
                <Card.Text>Instructor: {data.instructor}</Card.Text>
                <Card.Text>Due Date: {data.dueDate}</Card.Text>
                <ProgressBar now={data.progressData} label={`${data.progressData}%`} visuallyHidden />
                </Card.Body>
                </Card><br/>
                </Col>
            )
            })}
        </Row>
    </Container> 
    </div>
    
  )
}

export default StudentDashboard