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


const PageRoutes = () => {

    return(
        <div>
            <Routes>
                <Route element={<Layout />} >
                    <Route index element={<Home />}/>
                    <Route path="/about/our-school" element={<OurSchool />}/>
                    <Route path="/about/faculty" element={<Faculty />}/>
                    <Route path="/about/infrastructure" element={<Infarastructure />}/>
                    <Route path="/about/privacy-policy" element={<PrivacyPolicy />}/>
                    <Route path="/about/vision-mission" element={<VisionMission />}/>
                    <Route path="/acadmics/curriculum" element={<Curriculum />}/>
                    <Route path="/acadmics/classes" element={<Classes />}/>

                </Route>

                <Route path="/login" element={<Login />}/>
                <Route path="/Signup" element={<Signup />}/>
            </Routes>
        </div>
    )
}

export default PageRoutes