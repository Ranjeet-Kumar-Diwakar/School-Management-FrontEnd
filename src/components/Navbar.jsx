import { Menu, X } from "lucide-react"
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


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
                        <li>Home</li>
                        <li>About us</li>
                        <li>Acadmics</li>
                        <li>Admissions</li>
                        <li>Facilities</li>
                        <li>Examination</li>
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