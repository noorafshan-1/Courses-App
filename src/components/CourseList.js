import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from "./CourseCard";


const CourseList = ({ searchQuery, selectedCategory }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let url = '${base_url}/courses';
        if (searchQuery || selectedCategory) {
          url += `?search=${searchQuery}&category=${selectedCategory}`;
        }
        const res = await axios.get(url);
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };
    fetchCourses();
  }, [searchQuery, selectedCategory]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          instructor={course.instructor}
          image={course.image}
        />
      ))}
    </div>
  );
};

export default CourseList;