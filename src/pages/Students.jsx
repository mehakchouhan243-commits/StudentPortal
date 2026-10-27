import StudentCard from '../components/StudentCard'
import StudentForm from '../Components/StudentForm'
import Breadcrumb from '../components/BreadCrumb';
import PageHeader from "../Components/PageHeader";
import student6 from '../assets/student6.png';
import student3 from '../assets/student3.png';
import student4 from '../assets/student4.png';
import student5 from '../assets/student5.png';
import Pagination from '../components/Pagination';

function Students(){
    return(

       <div className="container mt-5">

      <h1 className="mb-4">
        Students
      </h1>

      {/* Student Form */}
      <div className="mb-5">
        <StudentForm/>
   

      </div>

      {/* Existing Students */}
      <h2 className="mb-4">
        Student List
      </h2>

      <div className="row">

        {/* Student 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={101}
            name="Jane Doe"
            program="Computer Science"
            semester={2}
          />
        </div>

        {/* Student 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={102}
            name="Mary Doe"
            program="Software Engineering"
            semester={4}
          />
        </div>

        {/* Student 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={103}
            name="Gant Doe"
            program="Computer Science"
            semester={3}
          />
        </div>

        {/* Student 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <StudentCard
            id={104}
            name="Amm Doe"
            program="Information Technology"
            semester={2}
          />
        </div>

      </div>

    </div>
  )
}

export default Students;