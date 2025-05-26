import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import base_url from "../api/service";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch the course details by ID
    fetch(`${base_url}/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!course) return <p>Loading course details...</p>;

  // Sample tutorial links based on course title (can be dynamic or static)
  // const tutorialLinks = {
  //   "Java": [
  //     { name: "GeeksforGeeks Java Tutorial", url: "https://www.geeksforgeeks.org/java/" },
  //     { name: "Java Playlist - YouTube", url: "https://www.youtube.com/playlist?list=PLsyeobzWxl7oZ9tGTHyCu9bZ1TKx5hA12" }
  //   ],
  //   "Node": [
  //     { name: "Node.js Guide", url: "https://nodejs.dev/en/learn/" },
  //     { name: "Node.js Crash Course - YouTube", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" }
  //   ],
  //   "React": [
  //     { name: "React Official Docs", url: "https://www.w3schools.com/" },
  //     { name: "React Crash Course - YouTube", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" }
  //   ]
  // };

  // const links = tutorialLinks[course.title?.toLowerCase().includes("java") ? "Java" :
  //                             course.title?.toLowerCase().includes("node") ? "Node" :
  //                             course.title?.toLowerCase().includes("react") ? "React" :
  //                             "Java","React"]; // default


  return (
    <div style={{ padding: '20px' }}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      {course.tutorialLinks && course.tutorialLinks.length > 0 && (
        <>
        <h4>Learning Resources</h4>
          <ul>
        {course.tutorialLinks.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
      </>
      )}
    </div>

    // <div className="p-4">
    //   <img className="w-full h-60 object-cover rounded" src={course.image} alt={course.title} />
    //   <h1 className="text-2xl font-bold mt-4">{course.title}</h1>
    //   <p className="text-gray-700 mt-2">Instructor: {course.instructor}</p>
    //   <p className="mt-4">{course.description}</p>
    // </div>
  );
};

export default CourseDetail;
