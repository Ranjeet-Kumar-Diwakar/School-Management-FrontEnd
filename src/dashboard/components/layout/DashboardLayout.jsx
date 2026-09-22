import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../../../styles/dashboardlayout.css";
import DashboardNavbar from "./DashboardNavbar";
import Student from "../../../components/Student";

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <DashboardNavbar />
            <aside className="dashboard-sidebar">
                <Sidebar />
            </aside>

            <main className="dashboard-content">
                <Outlet />
            </main>

        </div>
    );
};

export default DashboardLayout;