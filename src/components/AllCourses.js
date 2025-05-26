import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/service";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); // ✅ for update support

  useEffect(() => {
    document.title = "All Courses";
  }, []);

  //function to call server:
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //success
        console.log(response);
        setCourses(response.data);
        // toast.success("courses has been loaded");
        // console.log(response,"response");
      },
      (error) => {
        //this is for eror
        // console.log(error);
        toast.error("something went wrong");
      }
    );
  };

  //calling loading course funcxtion
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${base_url}/courses`);
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const setDeleteCourseById = async (id) => {
    try {
      const res = await fetch(`${base_url}/courses/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Course deleted successfully!");
        setCourses(courses.filter((course) => course.id !== id));
      } else {
        alert("Failed to delete the course.");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // const [courses, setCourses] = useState([
  //   { id: 1, title: "Java Course", description: "this is demo course" },
  //   { id: 2, title: "Python Course", description: "this is demo course" },
  //   { id: 3, title: "Reactjs Course", description: "this is demo course" },
  // ]);

  return (
    <>
      <h1 className="text-center">All Courses</h1>
      {/* <p>This is all aCourses</p> */}
      {courses.map((item) => (
        <Course
          key={item.id}
          course={item}
          onUpdate={setSelectedCourse}
          onDelete={setDeleteCourseById}
        />
      ))}
    </>
  );
};

export default AllCourse;
