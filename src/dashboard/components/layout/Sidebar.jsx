import { BellRing, CircleArrowDown } from 'lucide-react'
import '../../../styles/sidebar.css'
import useAuth from '../../../context/useAuth';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import sidebarItems from '../../SideBarData';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = () => {

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

    )
}

export default Sidebar