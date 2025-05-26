import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import base_url from "../api/service"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally send data to backend here
    axios.post(`${base_url}/contact`, formData)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message.");
      });
  };

  return (
    <Container className="mt-4">
      <Card className="shadow"  style={{ maxWidth: "600px", margin: "0 auto" }}>
        <CardBody>
          <CardTitle tag="h3" className="text-center mb-4">
            Contact Us
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </FormGroup>

            <Button type="submit" color="primary">Send Message</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Contact;
