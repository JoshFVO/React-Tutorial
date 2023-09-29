import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const schedule = {
  "title": "CS Courses for 2023-2024",
  "Courses": {
    "CS310": {
      "Term": "Fall",
      "Number": "310",
      "Meets": "TT 2:00-3:20",
      "Title": "Scalable Software Architecture"
    },

      "CS327": {
      "Term": "Fall",
      "Number": "327",
      "Meets": "MWF 8:00-8:50",
      "Title": "Generative Methods"
    },

    "CS330": {
      "Term": "Fall",
      "Number": "330",
      "Meets": "TT 3:30-4:50",
      "Title": "Human Computer Interaction"
    },

    "CS392": {
      "Term": "Fall",
      "Number": "392",
      "Meets": "MWF 3:00-3:50",
      "Title": "Rapid Prototyping for Software Innovation"
    }
  }
};

const App = () => {
  return(
    <div className="container">
      <Banner title={schedule.title} />
      <CourseList Courses={schedule.Courses} />
    </div>
  )
};

export default App;
