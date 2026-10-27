
import CourseCard from '../Components/CourseCard';

function Courses() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Courses</h2>

      <div className="row g-3">

        <div className="col-md-4">
          <CourseCard
            name="React JS"
            code="CS101"
            instructor="Mr. Ali"
          />
        </div>

        <div className="col-md-4">
          <CourseCard
            name="Database Systems"
            code="CS102"
            instructor="Miss Sara"
          />
        </div>

        <div className="col-md-4">
          <CourseCard
            name="Web Development"
            code="CS103"
            instructor="Mr. Ahmed"
          />
        </div>

      </div>
    </div>
  );
}

export default Courses;










































// function Courses() {

//   return (

//     <div className="container mt-5">

//       <h1>Courses</h1>

//       <div className="row">

//         <div className="col-md-4">

//           <div className="card">

//             <div className="card-body">

//               <h5 className="card-title">
//                 Software Construction
//               </h5>

//               <p className="card-text">
//                 React and ASP.NET Core
//               </p>

//             </div>

//           </div>

//         </div>

//         <div className="col-md-4">

//           <div className="card">

//             <div className="card-body">

//               <h5 className="card-title">
//                 Database Systems
//               </h5>

//               <p className="card-text">
//                 Database design and SQL
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>

//   )
// }

// export default Courses