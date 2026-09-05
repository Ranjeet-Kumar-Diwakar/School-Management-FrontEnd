import { BellRing, CircleArrowDown } from 'lucide-react'
import '../../../styles/dashboardlayout.css'
import useAuth from '../../../context/useAuth';
import { Navigate, NavLink } from 'react-router-dom';
import sidebarItems from '../../SideBarData';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardLayout = () => {

    const { user, permission, logout, token } = useAuth();

    const [profileDropdown, setProfileDropdown] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [response, setResponse] = useState(null);


    const sidebarAllowedItems = sidebarItems.filter(item => {
        return permission?.includes(item.permission);


    })

    // console.log(sidebarAllowedItems);


    // get profile image. call backend api

    const getProfileImage = async () => {

        try {
            const apiUrl = import.meta.env.VITE_API_BASE_URL + `/user/get-profile-image/${user?.id}`

            if (!user?.id || !token) {
                return;
            }

            console.log("api url" + apiUrl);

            console.log(token);


            const response = await axios.get(apiUrl, {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                responseType: "blob"
            })

            console.log("response ", response);
            setResponse(response.blob);

            // Convert Blob into browser-readable URL
            const imageUrl = URL.createObjectURL(response.data);

            setProfileImage(imageUrl);

            console.log("imge url", imageUrl);
        } catch (error) {
            console.error("Error getting profile image", error);

        }

    };

    useEffect(() => {
        getProfileImage();

    }, [user?.id, token])


    return (
        <div className="dashboard-layout-container">

            {/* <div className="profile-image">
                <img
                    src={profileImage}
                    alt="Profile"
                    width="100"
                    height="100"
                />
            </div> */}

            <div className="image-testing">
                <img src={response?.data?.profileImage} />
            </div>

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

                <div className="profile-wrapper">
                    <div className="profile-container">
                        <img
                            src={profileImage || "/images/defaultProfileImage.png"}
                            alt="profile-image"
                            className="profile-image"
                        />

                        <div className="profile-info">
                            <h3>{user?.name || "Developer"}</h3>
                            <span>{user?.role || "USER"}</span>
                        </div>
                        <div className="profile-arrow">
                            <CircleArrowDown onClick={() => setProfileDropdown(true)} />
                        </div>

                        {/* dropdown */}
                        <div className={profileDropdown ? "profile-dropdown" : "hide-profile-dropdown"}>
                            <button>My Profile</button>
                            <button>Account Settings</button>
                            <button>Change Password</button>
                            <button className="logout-btn" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DashboardLayout