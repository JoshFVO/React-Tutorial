import React from "react";

const Course = ({course}) => (
    <div>
        <p>{course.Title}</p>
        <p>{course.Term} - {course.Meets}</p>
    </div>
);

const CourseList = ({Courses}) => (

    <div>
        {Object.entries(Courses).map(([id, course]) => <Course key={id} course={course} />)}
    </div>
);

export default CourseList;