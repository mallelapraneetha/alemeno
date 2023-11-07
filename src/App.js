
import './App.css';
import Courselist from './Courselist';
import CourseDetails from './CourseDetails';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import StudentDashboard from './StudentDashboard';
function App() {
  return (
    
    <Router>
    <div className="main">
      <div>
        <Routes>
          <Route exact path='/' element={<Courselist/>} />
        </Routes>
      </div>
      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route exact path='/CourseDetails/:id' element={<CourseDetails/>} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route exact path='/StudentDashboard' element={<StudentDashboard/>} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
