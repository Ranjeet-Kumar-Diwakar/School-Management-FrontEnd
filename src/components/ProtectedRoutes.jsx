import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    const token = localStorage.getItem("accessToken")

    console.log(token);
    

    if(!token) {
        return <Navigate to="/login" replace/>
    }

    return <Outlet />
}

export default ProtectedRoutes