import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const[user, setUser] = useState(null);
    const[permission, setPermission] = useState(null);
    const[token, setToken] = useState(null);
    // loading state

    useEffect(()=> {
        const storedUser = localStorage.getItem("user");
        const storedPermission = localStorage.getItem("permission");
        const token = localStorage.getItem("accessToken");

        if(storedUser){
            setUser(JSON.parse(storedUser));
        }

        if (storedPermission) {
            setPermission(JSON.parse(storedPermission));
        }

        if(token) {
            setToken(JSON.parse(token));
        }
    },[])

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

        hasPermission
    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;