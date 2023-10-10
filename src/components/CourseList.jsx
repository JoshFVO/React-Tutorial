import React from "react";
import Course from './Course';
import './CourseList.css';


const CourseList = ({selection, courses, selected, toggleSelected}) => (

    <div className="course-list">
        {Object.entries(courses)
        .filter(([id, course]) => course.term === selection)
        .map(([id, course]) => (<Course key={id} course={course} selected={selected} toggleSelected={toggleSelected}/>))} 
    </div>
    
);

export default CourseList;