import { Menu, X } from "lucide-react"
import { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    return (
        <>

            <div className="nav-container">
                <div className="school-header">
                    <div className="school-img">
                        <img src="/images/school-logo.png" alt="Logo" />
                    </div>

                    <div className="school-heading">
                        <h3>Bright Future International School</h3>
                        <p>Learn Today, Lead Tomorrow</p>
                    </div>
                </div>

                <div className="nav-links">
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>


                        <li className="dropdown">
                            About us

                            <ul className="dropdown-menu" >
                                <li><Link to={"/about/our-school"}>Our School</Link></li>
                                <li><Link to={"/about/vision-mission"} >Missions & Visions</Link></li>
                                <li><Link to={"/about/faculty"}>Faculty</Link></li>
                                <li><Link to={"/about/infrastructure"}>Infrastructure</Link></li>
                                <li><Link to={"/about/privacy-policy"}>Privacy Policy</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            Acadmics

                            <ul className="dropdown-menu" >
                                <li><Link to="/acadmics/curriculum">Curriculum</Link></li>
                                <li><Link to="/acadmics/classes">Classes</Link></li>
                                <li><Link to="/acadmics/department">Departments</Link></li>
                                <li><Link to="/acadmics/acadmic-calender">Acadmic Calender</Link></li>
                                <li><Link to="/acadmics/syllabus">Syllabus</Link></li>
                                <li><Link to="/acadmics/course">Courses</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            Admissions

                            <ul className="dropdown-menu" >
                                <li><Link>Registration</Link></li>
                                <li><Link>Apply Online</Link></li>
                                <li><Link>Fee Structure</Link></li>
                                <li><Link>Required Documents</Link></li>
                                <li><Link>Addmission Form</Link></li>
                                
                            </ul>
                        </li>

                       
                        <li className="dropdown">
                            Facilities

                            <ul className="dropdown-menu" >
                                <li><Link>Smart Classes</Link></li>
                                <li><Link>Library</Link></li>
                                <li><Link>Science Labs</Link></li>
                                <li><Link>Computer Labs</Link></li>
                                <li><Link>Sports</Link></li>
                                <li><Link>Transport</Link></li>
                                <li><Link>Dispensary</Link></li>
                                
                            </ul>
                        </li>

                          <li className="dropdown">
                                 Examination

                            <ul className="dropdown-menu" >
                                <li><Link>Exam Schedule</Link></li>
                                <li><Link>Admit Card</Link></li>
                                <li><Link>Result</Link></li>
                                <li><Link>Rules & Regulations</Link></li>
                                
                                
                            </ul>
                        </li>

                        <li>Contact Us</li>
                    </ul>
                </div>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <X /> : <Menu />
                    }
                </button>


                <div className="nav-btn">
                    <button className="primary-button" onClick={() => navigate('/login')}>Login</button>
                </div>


            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Acadmics</li>
                        <li>Admissions</li>
                        <li>Facilities</li>
                        <li>Examination</li>
                        <li>Contact Us</li>
                        <li className="mobile-login">Login</li>
                    </ul>


                </div>


            )}


        </>
    )
}

export default Navbar