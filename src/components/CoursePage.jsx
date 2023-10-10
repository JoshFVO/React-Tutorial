import { useState } from 'react';
import CourseList from "./CourseList";


const CoursePage = ({selection, courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => {
    setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
  }

  return (
    <CourseList selection={selection} courses={courses} selected={selected} toggleSelected={toggleSelected}/>
  );
};

export default CoursePage;