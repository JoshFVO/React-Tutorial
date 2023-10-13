import Course from "./Course";

const Cart = ({selected, courses}) => {
    const courseKeys = Object.entries(courses)
    console.log(courseKeys)
    return(
    <div>
        {Object.entries(selected).map(([id, course]) => <p>{course}</p>)}
    </div>
  )};
  
  export default Cart;