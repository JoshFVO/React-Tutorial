import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';

const schedule = {
  "title": "CS Courses for 2023-2024",
  "Courses": {
    "CS310": {
      "Term": "Fall",
      "Number": "310",
      "Meets": "TT 2:00 - 3:20",
      "Title": "CS 310: Scalable Software Architecture"
    },

      "CS327": {
      "Term": "Fall",
      "Number": "327",
      "Meets": "MWF 8:00 - 8:50",
      "Title": "CS 327: Generative Methods"
    },

    "CS330": {
      "Term": "Fall",
      "Number": "330",
      "Meets": "TT 3:30 - 4:50",
      "Title": "CS 330: Human Computer Interaction"
    },

    "CS392": {
      "Term": "Fall",
      "Number": "392",
      "Meets": "MWF 3:00 - 3:50",
      "Title": "CS 392: Rapid Prototyping for Software Innovation"
    }
  }
};

const App = () => {
  return(
    <div className="Schedule">
      <Banner title={schedule.title} />
      <CourseList Courses={schedule.Courses} />
    </div>
  )
};

export default App;
