import React, { Fragment, useEffect, useState } from "react";
import {
  FormGroup,
  Form,
  Input,
  Button,
  Container,
  Label,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/service";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AddCourses = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Add Course  || learn with Noor";
  }, []);

  // If we came here via "Update" button, course will be present in location.state
  const courseToEdit = location.state?.course;

  const [course, setCourse] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (courseToEdit) {
      setCourse(courseToEdit);
    }
  }, [courseToEdit]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!course.title.trim() || !course.description.trim()) {
      toast.error("Title and Description are required!");
      return;
    }

    if (course.id) {
      // Update logic
      axios.put(`${base_url}/courses`, course).then(
        () => {
          toast.success("Course updated successfully!");
          navigate("/view-courses");
        },
        () => {
          toast.error("Failed to update course");
        }
      );
    } else {
      // Add new course logic
      axios.post(`${base_url}/courses`, course).then(
        () => {
          toast.success("Course added successfully!");
          setCourse({ id: "", title: "", description: "" });
          navigate("/view-courses");
        },
        () => {
          toast.error("Failed to add course");
        }
      );
    }
  };

  const clearForm = () => {
    if (courseToEdit) {
      setCourse(courseToEdit); // Reset to original update values
    } else {
      setCourse({ id: "", title: "", description: "" }); // Clear everything
    }
    //If i want to confirm before clearing:
    // const confirmClear = window.confirm("Clear all fields?");
    // if (!confirmClear) return;

    // if (courseToEdit) {
    //   setCourse(courseToEdit);
    // } else {
    //   setCourse({ id: "", title: "", description: "" });
    // }
  };

  

  return (
    <Container className="mt-4">
      <Card className="shadow add-course-card">
        <CardBody>
          <CardTitle tag="h3" className="text-center mb-4">
            Add Course
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <Row>
              {courseToEdit && (
                <Col md={6} className="mb-4">
                  <FormGroup>
                    <Label for="id">Course ID</Label>
                    <Input
                      type="text"
                      id="id"
                      name="id"
                      placeholder="Enter Course ID"
                      value={course.id}
                      onChange={handleChange}
                      // readOnly={!!courseToEdit}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              )}

              {!courseToEdit && (
              <Col md={6} className="mb-3">
              </Col>
              )}

              <Col md={6} className="mb-3"></Col>
              <Col md={6} className="mb-3">
                <FormGroup>
                  <Label for="title">Course Title</Label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter Course Title"
                    value={course.title}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6} className="mb-3"></Col>
              <Col md={6} className="mb-3">
                <FormGroup>
                  <Label for="description">Course Description</Label>
                  <Input
                    type="textarea"
                    id="description"
                    name="description"
                    placeholder="Enter Description here"
                    value={course.description}
                    onChange={handleChange}
                    style={{ minHeight: "100px" }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <Button color="success" className="me-3" type="submit">
                {courseToEdit ? "Update Course" : "Add Course"}
              </Button>
              <Button color="warning" type="button" onClick={clearForm}>
                Clear
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AddCourses;
