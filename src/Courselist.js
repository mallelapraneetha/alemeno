/* eslint-disable react/jsx-no-undef */
import React ,{useState , useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Courselist() {
    const [courses,setCourses] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        axios.get(`https://654886d7dd8ebcd4ab2304b7.mockapi.io/courses`)
        .then((response) => {
            console.log(response.data);
            setCourses(response.data);
            localStorage.setItem("APIres",JSON.stringify(response.data))
        })
    }, []);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredCourses = courses.filter((course) =>
        course.courseName.toLowerCase().includes(searchText.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchText.toLowerCase())
    );
    
  return (
    <div>
    <Container>    
    <h1>Course List</h1><Link to="/StudentDashboard">Student Dashboard</Link>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="text" value={searchText} placeholder="Search by Course Name or Instructor Name" onChange={handleSearchChange}/>
    </Form.Group>
        <Row>
            {filteredCourses.map((data) => {
            return(
                <Col>
                <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                <Card.Title>Course Name:{data.courseName}</Card.Title>
                <Card.Text>Instructor: {data.instructor}</Card.Text>
                
                
                <Link className="btn-item auction-btn mr-2" to={`/CourseDetails/${data.id}`}>
                Details
                </Link>
                
                </Card.Body>
                </Card><br/>
                </Col>
            )
            })}
        </Row>
    </Container>  
</div>
  );
}

export default Courselist
