import React from "react";
import './Course.css';

const Course = ({id, course, selected, toggleSelected}) => (
    <div className="product card m-1 p-2" onClick={() => toggleSelected(id)}>
         <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
            <div className="course-info">
                <h4 className="card-title">{course.term} CS {course.number}</h4>
                <p className="card-text">{course.title}</p>
                <hr></hr>
                <p className ="card-text">{course.meets}</p>
            </div>
        </div>
    </div>
);

export default Course;