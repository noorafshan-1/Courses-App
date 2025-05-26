import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import base_url from "../api/service";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Course = ({ course,onUpdate,onDelete}) => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const handleUpdate = () => {
    navigate("/add-course", { state: { course } }); //  pass course via route state
  };

  const handleDelete = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirm) return;
    onDelete(course.id); // call parent handler
  };

  return (
    <Card className="text-center shadow my-3">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          {/* <Button color="Warning">Update</Button>*/}
          <Button color="warning"
           onClick={handleUpdate}
           className="mx-1"
           >
            Update
          </Button>
          <button onClick={handleDelete} className="btn btn-danger mx-1">
            Delete
          </button>

          <button
            className="btn btn-success mx-1"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
           Start Learning
          </button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
