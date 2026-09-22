import { useParams } from 'react-router-dom'
import '../styles/student.css'
import useAuth from '../context/useAuth'
import { BookOpen, Building, CalendarDays, FileText, FileTextIcon, Percent, Phone, School, User, Users } from 'lucide-react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
const Student = () => {

    const { user, profileImage } = useAuth()
    const [percent, setPercent] = useState(0);
    const [value, setValue] = useState(90);
    const [activeTab, setActiveTab] = useState("parent")

    useEffect(() => {
        setTimeout(() => {
            if (percent < value) {
                setPercent(percent + 1);
            }
        }, 30)
    }, [percent])

    return (
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
                <div className="student-image">
                    <img src={profileImage} alt={profileImage} />
                </div>

                <div className="student-biodata">
                    <h3>{user?.name}</h3>
                    <button>Active</button>

                    <span>
                        <User className='student-icon' />
                        {user?.id}
                    </span>

                    <span>
                        <Building className='student-icon' />
                        Class : 10 - A
                    </span>


                    <span>
                        <CalendarDays className='student-icon' />
                        4th April 2002
                    </span>

                    <span>
                        <School className='student-icon' />
                        Academic Year : 2026-2027
                    </span>
                </div>

                <div className="student-details-right-section">

                    <div className="attendence-section">
                        <h6>Attendence</h6>
                        <CircularProgressbar
                            value={percent} text={`${percent}%`}
                            className='circle-progress-bar'
                        />
                    </div>

                    <div className="marks-section">
                        <h6>Total Marks</h6>
                        <p>(Latest Exam)</p>
                        <h5>432/500</h5>
                    </div>


                    <div className="rank-section">
                        <h6>Rank</h6>
                        <h5>5</h5>
                        <p>(in class)</p>
                    </div>

                    <div className="status-section">
                        <h6>Status</h6>
                        <button>Active</button>
                    </div>
                </div>

            </div>

            {/* student details description */}

            <div className="all-details-section">

                <button
                    className={`details-tab ${activeTab === "personal" ? "active" : ""}`}
                    onClick={() => setActiveTab("personal")}
                >
                    <User />
                    <span>Personal Details</span>
                </button>

                <button
                    className={`details-tab ${activeTab === "academic" ? "active" : ""}`}
                    onClick={() => setActiveTab("academic")}
                >
                    <BookOpen />
                    <span>Academic Details</span>
                </button>

                <button
                    className={`details-tab ${activeTab === "parent" ? "active" : ""}`}
                    onClick={() => setActiveTab("parent")}
                >
                    <Users />
                    <span>Parent/Guardian Details</span>
                </button>

                <button
                    className={`details-tab ${activeTab === "contact" ? "active" : ""}`}
                    onClick={() => setActiveTab("contact")}
                >
                    <Phone />
                    <span>Contact Details</span>
                </button>

                <button
                    className={`details-tab ${activeTab === "documents" ? "active" : ""}`}
                    onClick={() => setActiveTab("documents")}
                >
                    <FileText />
                    <span>Documents</span>
                </button>

            </div>
        </div>
    )
}

export default Student