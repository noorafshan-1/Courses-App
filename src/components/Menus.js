import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


const Menus = () => {
  return (
    <div className="sidebar-container">
      <h4 className="menu-header text-center">📚 Course Dashboard</h4>
      <ListGroup>
        <ListGroupItem tag={Link} to="/" action className="menu-item">
          Home
        </ListGroupItem>
        <ListGroupItem tag={Link} to="/add-course" action className="menu-item">
          Add Course
        </ListGroupItem>
        <ListGroupItem
          tag={Link}
          to="/view-courses"
          action
          className="menu-item"
        >
          View Courses
        </ListGroupItem>
        <ListGroupItem tag={Link} to="/about" action className="menu-item">
          About
        </ListGroupItem>
        <ListGroupItem tag={Link} to="/contact" action className="menu-item">
          Contact
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Menus;
