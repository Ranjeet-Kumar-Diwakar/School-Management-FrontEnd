import { Mail, MapPin, Phone } from "lucide-react"


const Footer = () => {

    return (
        <div>
            <div className="footer-container">
                <div className="footer-left">

                    <div className="school-logo mobile-view">
                        <div className="logo-image">
                            <img src="/images/school-logo.png" alt="Logo" />
                        </div>

                        <div className="school-heading">
                            <h1>Bright Future International School</h1>
                            <p>Learn Today, Lead Tomorrow</p>
                        </div>
                    </div>

                    <div className="social-media-links mobile-view">
                        <ul className="icon-list">
                            <li><img src="/images/facebook.png" alt="facebook" /></li>
                            <li><img src="/images/instagram.png" alt="instagram" /></li>
                            <li><img src="/images/youtube.png" alt="youtube" /></li>
                            <li><img src="/images/linkedin.png" alt="linkedin" /></li>
                        </ul>
                    </div>
                </div>

                <div className="quick-links mobile-view">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Academics</li>
                        <li>Addmissions</li>
                    </ul>
                </div>

                <div className="quick-links mobile-view">
                    <ul>
                        <li>Facilities</li>
                        <li>News & Events</li>
                        <li>Contacts</li>
                        <li>Login</li>
                    </ul>
                </div>

                <div className="contact-info mobile-view">
                    <ul>
                        {/* location */}
                        <li>
                            <MapPin className="contact-icons" />
                            <p>Plot Number 123, Knowledge Park, Greater Noida Uttar Pradesh  201301</p>
                        </li>

                        {/* mobile number */}
                        <li>
                            <Phone className="contact-icons"/>
                             <p> +91 9012436521 </p>
                        </li>
                        
                        {/* email */}
                        <li>
                          <Mail className="contact-icons" />
                            <p>brightfuture.ac.in</p>
                        </li>


                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer