import { useParams } from 'react-router-dom'
import '../styles/student.css'
const Student = () => {

    return(
        <div className='student-container'>
            <div className="student-heading">
                <div className="student-heading-left">
                    <p>Dashboard > Student > Student Details</p>
                    <h2>Student Details</h2>
                </div>

                <div className="student-heading-right">
                    <button className='primary-button'>Edit</button>
                    <button className='primary-button'>back to List</button>
                </div>
            </div>

            {/* sudent details */}

            <div className="student-details">
                
            </div>
        </div>
    )
}

export default Student