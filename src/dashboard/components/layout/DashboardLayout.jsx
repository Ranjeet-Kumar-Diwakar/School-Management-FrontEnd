import { BellRing, Search } from 'lucide-react'
import '../../../styles/dashboardlayout.css'
import useAuth from '../../../context/useAuth';
import { NavLink } from 'react-router-dom';
import sidebarItems from '../../SideBarData';

const DashboardLayout = () => {

    const { user, permissions } = useAuth();

    const sidebarAllowedItems = sidebarItems.filter(item => {
       return permissions.includes(item.permission);
        
        
    })
    console.log(sidebarAllowedItems);
    

    return (
        <div className="dashboard-layout-container">

            <div className="dashboard-sidebar">

                <div className="school-img">
                    <img src="/images/school-logo.png" alt="Logo" />
                </div>

                {
                    sidebarAllowedItems.map((item) => (


                        <ul key={item.permission}>
                            <li>
                                
                                <NavLink
                                to={item.path}
                                    className={({ isActive }) =>
                                        `sidebar-link ${isActive ? "sidebar-link-active" : ""}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        </ul>
                    ))
                }
            </div>



            <div className="dashboard-navbar">
                <div className="heading">
                    <h2>Dashboard</h2>
                </div>
                <div className="search-bar">
                    <input type="search" placeholder="Search anything here" />
                </div>

                <div className="notification-icon">
                    <BellRing />
                </div>

                <div className="profile">

                    <img src={"/images/defaultProfileImage.png"} alt="profile-image" />
                    <h5>{user.name}</h5>
                    <p>
                        {user.role}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default DashboardLayout