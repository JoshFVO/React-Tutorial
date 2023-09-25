import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const schedule = {
  title: "CS Courses for 2023-2024"
};

const App = () => {

  const scheduleTitle = schedule.title

  return (
    <div className="App">
      <h1> {scheduleTitle}</h1>
    </div>
  );
};

export default App;
