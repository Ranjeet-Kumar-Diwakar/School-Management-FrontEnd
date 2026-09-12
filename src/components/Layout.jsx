import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import useAuth from '../context/useAuth'
import DashboardNavbar from "../dashboard/components/layout/DashboardNavbar";

const Layout = () => {

    const {user} = useAuth();

    return(
        <div>
            {user ? <DashboardNavbar /> : <Navbar />}
            {/* <Navbar /> */}
            
            <main>
                <Outlet  />
            </main>
        </div>
    )
}

export default Layout