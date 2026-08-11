import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");

        return storedUser
            ? JSON.parse(storedUser)
            : "user not found";
    });

    

    const [token, setToken] = useState(() => {
        return localStorage.getItem("accessToken");
    });

    const [permissions, setPermissions] = useState(() => {
        const storedPermissions =
            localStorage.getItem("permission");

            return storedPermissions
            ? JSON.parse(storedPermissions)
            : [];
    });


    const login = (responseData) => {


        const userData = responseData.user;
        const accessToken = responseData.token;
        const userPermissions = responseData.permission;

        setUser(userData);
        setToken(accessToken);
        setPermissions(userPermissions);

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        localStorage.setItem(
            "accessToken",
            accessToken
        );

        localStorage.setItem(
            "permissions",
            JSON.stringify(userPermissions)
        );
    };


    const logout = () => {

        setUser(null);
        setToken(null);
        setPermissions([]);

        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("permissions");
    };


    const hasPermission = (permission) => {
        return permissions.includes(permission);
    };


    const value = {
        user,
        token,
        permissions,

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