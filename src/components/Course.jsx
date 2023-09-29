import React from "react";
import './Course.css';

const Course = ({course}) => (
    <div className="card m-1 p-2">
        <div className ="card-body">
        <h4 className="card-title">{course.Term} CS {course.Number}</h4>
        <p className="card-text">{course.Title}</p>
        <hr></hr>
        <p className ="card-text">{course.Meets}</p>
        </div>
    </div>
);

export default Course;