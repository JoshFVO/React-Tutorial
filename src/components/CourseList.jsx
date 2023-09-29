import React from "react";
import Course from './Course';
import './CourseList.css';


const CourseList = ({Courses}) => (

    <div className="course-list">
        {Object.entries(Courses).map(([id, course]) => <Course key={id} course={course} />)}
        {/* Courses.map(course => <Course key={course.id} course={course} />) */}
    </div>
);

export default CourseList;