import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import AllCourses from "./components/AllCourses";
import AddCourses from "./components/AddCourses";
import { Container, Row, Col } from "reactstrap";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";
import CoursesPage from "./pages/CoursesPage";
import CourseDetail from "./pages/CourseDetail";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Container fluid className="main-container">
          <Header />
          <Row>
            <Col md={4} className="sidebar">
              <Menus />
            </Col>
            <Col md={8} className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourses />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
            <Footer />
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
