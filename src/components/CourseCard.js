import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ id, title, instructor, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition"
      onClick={() => navigate(`/course/${id}`)}
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-4 py-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">Instructor: {instructor}</p>
      </div>
    </div>
  );
};

export default CourseCard;

  