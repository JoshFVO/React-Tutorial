import { useState } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Cart from './Cart';
import Course from './Course';


const CoursePage = ({selection, courses}) => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => {
    setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
}

  return (
    <div>
    <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4"></i></button>
      <Modal open={open} close={closeModal}>
        <Cart selected={selected} courses={courses}/>
      </Modal>
    <CourseList selection={selection} courses={courses} selected={selected} toggleSelected={toggleSelected}/>
    </div>
  );
};

export default CoursePage;