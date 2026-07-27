import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {

    return(
        <div>
            <Navbar />
            
            <main className="page-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout