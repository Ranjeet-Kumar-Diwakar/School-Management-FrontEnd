import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import OurSchool from "./about-us/OurSchool"
import Faculty from "./about-us/Faculty"
import Infarastructure from "./about-us/Infrastructure"
import PrivacyPolicy from "./about-us/PrivacyPolicy"
import Login from "./Login"
import Signup from "./Signup"
import VisionMission from "./about-us/VisionMission"
import Curriculum from "./Acadmics/Curriculum"
import Classes from "./Acadmics/Classes"
import Department from "./Acadmics/Department"
import DashboardLayout from "../dashboard/components/layout/DashboardLayout"
import ProtectedRoutes from "./ProtectedRoutes"
import UploadProfileImage from "./UploadProfileImage"


const PageRoutes = () => {

    return (
        <div>

            {/* public routes */}

            <Routes>
                <Route element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/about/our-school" element={<OurSchool />} />
                    <Route path="/about/faculty" element={<Faculty />} />
                    <Route path="/about/infrastructure" element={<Infarastructure />} />
                    <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/about/vision-mission" element={<VisionMission />} />
                    <Route path="/acadmics/curriculum" element={<Curriculum />} />
                    <Route path="/acadmics/classes" element={<Classes />} />
                    <Route path="/acadmics/department" element={<Department />} />

                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/upload-profile-image" element={<UploadProfileImage />} />

                     {/* protected routes  */}


                <Route element={<ProtectedRoutes />}>
                    <Route path="/dashboard" element={<DashboardLayout />} />
                </Route>
            </Routes>
        </div>
    )
}

export default PageRoutes