import { BookOpen, Eye, EyeOff, GraduationCap, Lock, Mail, ShieldCheck, UsersRound } from 'lucide-react'
import '../styles/Login.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
            "email" : "",
            "password" : ""
    });

         const onChangeHandler = (e) => {

        const {name, value} = e.target;

        const updateData = {
                ...loginData,
                [name] : value
        }

        setLoginData(updateData);
    }
    console.log(loginData);

    localStorage.setItem("loginData", JSON.stringify(loginData));

  
    // login handler
        const loginHandler = async () => {

            try {
               
                const apiUrl = import.meta.env.VITE_API_BASE_URL + "/public/auth/login";
                console.log(apiUrl);
                console.log(loginData);
                

                const response = await axios.post(apiUrl, loginData, {
                    headers: {
                        "Content-Type" : "application/json"
                    }
                })

                console.log(response.data.token);

                localStorage.setItem("token", JSON.stringify(response.data.token));
                 
            } catch (error) {
                console.log(error);
                
            }

        }
    

    return (
        <div>

            {/* school logo */}

            <div className="school-logo mobile-view">
                <div className="logo-image">
                    <img src="/images/school-logo.png" alt="Logo" />
                </div>

                <div className="sc-heading">
                    <h1>Bright Future International School</h1>
                    <p>Learn Today, Lead Tomorrow</p>
                </div>
            </div>

            <div className="form-container">
                <div className="left-section">
                    <div className="greeting">
                        <h2>Welcome back! </h2>
                        <p>Sign in to continue your learning journey with us</p>
                    </div>

                    <div className="facilities">
                        <div className="education items">
                            <div className='icon-section'>
                                <GraduationCap className='icon' />
                            </div>

                            <div className="content">
                                <h5>Qualitiy Education</h5>
                                <p>Nuturing young minds</p>
                            </div>
                        </div>

                        <div className="teacher items">
                            <div className='icon-section'>
                                <UsersRound className='icon' />
                            </div>

                            <div className="content">

                                <h5>Expert Teachers</h5>
                                <p>Guiding future leaders</p>
                            </div>
                        </div>

                        <div className="future items">
                            <div className="icon-section">
                                <BookOpen className='icon' />
                            </div>

                            <div className="content">
                                <h5>Bright future</h5>
                                <p>Building better tomorrow</p>
                            </div>
                        </div>


                    </div>

                    <div className="quote">
                        <p>
                            Education is most powerfull weapon which you can use to change the world.
                        </p>
                        <h5>Nelson Mandela</h5>
                    </div>

                </div>

                <div className="right-section">
                    <div className="heading">
                        <h2>Login</h2>
                        <p>Please Enter your credentials to access your account</p>
                    </div>

                    <div className="input-field">
                        <form action="#">

                            <div className="email-input">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name='email'
                                    id='email'
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="password-input ">
                                <label htmlFor="password"> Enter your Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter your password'
                                    name="password"
                                    id='password'
                                    onChange={onChangeHandler}
                                />

                                <div className="show-password">
                                    <button type='button' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <Eye /> : <EyeOff />
                                        }

                                    </button>
                                </div>
                            </div>


                        </form>
                    </div>

                    {/* important links */}

                    <div className="imp-link">
                        <div className="checkbox">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <div className="forget-password">
                            <NavLink to='/forget-password'>Forgot Password?</NavLink>
                        </div>
                    </div>

                    <div className="login-btn">
                        <button 
                            type='submit' 
                            className='login-btn'
                            onClick={loginHandler}
                            >
                                Login
                            </button>
                    </div>

                    <div className="register-user">
                        <p>Don't have an account?</p>
                        <NavLink to='/signup'> Register as a New User </NavLink>
                    </div>

                    <div className="privacy">
                        <div className='secure-login'>

                            <ShieldCheck color='#b49b9b' className='security-icon' />
                            <p>Secure Login</p>
                        </div>

                        <div className="protected-data">
                            <Lock color='#b49b9b' className='security-icon' />
                            <p>Your data is Protected</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login