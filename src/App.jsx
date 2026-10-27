import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import DashBoard from './pages/DashBoard';
import Students from './pages/Students';
import Courses from './pages/Courses';
import StudentProfile from './pages/StudentProfile';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/students/:id" element={<StudentProfile />} />
            <Route path="/about" element={<AboutUs/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;