import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [permission, setPermission] = useState(null);
    const [token, setToken] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    // loading state

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedPermission = localStorage.getItem("permission");
        const token = localStorage.getItem("accessToken");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        if (storedPermission) {
            setPermission(JSON.parse(storedPermission));
        }

        if (token) {
            setToken(JSON.parse(token));
        }

        if (user?.id && token) {
            getProfileImage(user.id, token);
        }
    },[user?.id, token])

    const login = (userData, permissionData) => {

        // update state
        setUser(userData);
        setPermission(permissionData);

        // update localstorage

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("permission", JSON.stringify(permissionData));

    };


    const logout = () => {

        setUser(null);
        setToken(null);
        setPermission([]);

        localStorage.removeItem("loginData");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("permission");
        localStorage.removeItem("user");
        navigate('/login');
        alert('Logged out successfully')
    };

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

            // Convert Blob into browser-readable URL
            const imageUrl = URL.createObjectURL(response.data);

            setProfileImage(imageUrl);

            console.log("imge url", imageUrl);
        } catch (error) {
            console.error("Error getting profile image", error);

        }

    };


    const hasPermission = (permission) => {
        return permission.includes(permission);
    };


    const value = {
        user,
        token,
        permission,

        isAuthenticated: !!token,

        login,
        logout,

        hasPermission,
        profileImage,
        setProfileImage,
        getProfileImage

    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;