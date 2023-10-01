import React from "react";
import './Course.css';

const Course = ({course}) => (
    <div className="card m-1 p-2">
        <div className ="card-body">
        <h4 className="card-title">{course.term} CS {course.number}</h4>
        <p className="card-text">{course.title}</p>
        <hr></hr>
        <p className ="card-text">{course.meets}</p>
        </div>
    </div>
);

export default Course;