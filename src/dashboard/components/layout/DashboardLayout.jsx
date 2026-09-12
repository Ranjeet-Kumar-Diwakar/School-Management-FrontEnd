import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../../../styles/dashboardlayout.css";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-main">

                <DashboardNavbar />

                <main className="dashboard-content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;