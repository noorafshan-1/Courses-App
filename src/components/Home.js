import React, { useEffect } from "react";

import { Container, Row, Col, Button } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home  || learn with Noor";
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-light py-5">
      <Container className="text-center">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Welcome to Learn Code with Noor
        </h1>
        <p className="lead text-secondary">
          This is developed by LearnCode with Noor for learning purpose.
        </p>
        <p className="lead text-secondary">
          backend is on spring boot and frontend on react js
        </p>

        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <h4 className="text-success">📚 Add Courses</h4>
            <p>Easily create new course entries with detailed descriptions.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4 className="text-info">👀 View All Courses</h4>
            <p>See and manage your full course list with clean navigation.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4 className="text-warning">⚡ Easy to Use</h4>
            <p>
              Clean, user-friendly UI with quick add, view, and update and Learn Courses features.
            </p>
          </Col>
        </Row>

        <div className="mt-4">
          <Button color="primary" size="lg" className="me-3" href="/add-course">
            Add a New Course
          </Button>
          <Button color="secondary" size="lg" href="/view-courses">
            View Courses
          </Button>
        </div>
        <div className="mt-5 text-center">
          <h5 className="text-muted">💬 What learners are saying</h5>
          <blockquote className="blockquote">
            <p>
              "This platform made course management so simple and intuitive!"
            </p>
            <footer className="blockquote-footer">A Happy User</footer>
          </blockquote>
        </div>
        <div data-aos="fade-up">Welcome to Learn with Noor</div>
      </Container>
    </div>
  );
};

export default Home;
