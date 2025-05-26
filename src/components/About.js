import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const About = () => {
  return (
    <Card className="about-card mt-4 shadow">
      <CardBody className="about-body">
        <CardTitle tag="h3" className="about-title">
          About Course Management App
        </CardTitle>
        <CardText className="about-text">
          This is a simple and intuitive web application built for managing
          educational courses. Users can add, view,update and Learn courses.
        </CardText>

        <h5 className="about-subheading">Key Features:</h5>
        <ul>
          <li>Add new courses with title and description.</li>
          <li>Update existing course information.</li>
          <li>View a list of all available courses.</li>
          <li>View detailed information for each course.</li>
          <li>Learn courses in a dedicated learning section.</li>
        </ul>

        <h5 className="about-subheading">Tech Stack:</h5>
        <ul className="about-list">
          <li>Frontend: React.js with Reactstrap, React Router,Bootstrap</li>
          <li>Backend: Spring Boot (Java 17)</li>
          <li>Database: MySQL</li>
        </ul>

        <h5 className="about-subheading">Developer:</h5>
        <p className="about-text">Built by Noorafshan – Full Stack Developer</p>
        <p className="about-text">
          Connect with me on:
          <br />
          <a
            href="https://github.com/noorafshan-1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/noorafshan-jawaid-544a18223"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </CardBody>
    </Card>
  );
};

export default About;
