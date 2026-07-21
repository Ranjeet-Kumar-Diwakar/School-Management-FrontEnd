import { Eye, EyeOff } from 'lucide-react';
import '../styles/signup.css'
import { useEffect, useRef, useState } from 'react';
import axios, { Axios } from 'axios';


const Signup = () => {

    const [formData, setFormData] = new useState(() => {


        const savedData = localStorage.getItem("formData")

        return savedData
            ? JSON.parse(savedData)
            :

            {

                name: "",
                email: "",
                phone: "",
                role: "",
                gender: "",
                password: "",
                confirmPassword: ""

            };
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassowrd, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState({});
    const [isVerifyClicked, SetIsVerifyClicked] = useState(false);
    const firstRender = useRef(true);
    const [otp, setOtp] = useState({ email: "", otp: "" });
    const [apiResponse, setApiResponse] = useState({
        success: false,
        message: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        const updateData = {
            ...formData,
            [name]: value,
        };

        setFormData(updateData)

        console.log(updateData);

    };

    useEffect(() => {

        if (firstRender.current == true) {
            firstRender.current = false
            return;
        }

        localStorage.setItem("formData", JSON.stringify(formData));




        validateForm(formData);
    }, [formData])

    const validateForm = (formData) => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is Required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is Required";
        }

        if (formData.phone.length < 10) {
            newErrors.phone = "Invalid Number & minimum 10 number required";
        }

        if (formData.password.length < 8) {
            newErrors.password = "Password contain at least 8 characters";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Password does not match";
        }

        if (formData.role === "") {
            newErrors.role = "Account Role is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validateForm(formData)) {
            return;
        }

        const apiUrl = import.meta.env.VITE_API_BASE_URL + '/public/user/register-user';

        try {
            console.log(apiUrl);

            const response = await axios.post(apiUrl, formData, {
                headers: {
                    "Content-Type" :  "application/json"
                }
            });

             const updateResponse = {
                success: response.data.success,
                message: response.data.message
            }
            setApiResponse(updateResponse);


        } catch (error) {
             const  updateResponse = {
                success: error.response?.data?.success,
                message: error.response?.data?.message
            }
            setApiResponse(updateResponse);

        }

         setTimeout(() => {
               setApiResponse(
                {
                    success: false,
                    message: ""
                }
               )
            }, 3000);


    }

    // verify otp handler

    const verifyOtpHandler = async () => {

        const apiUrl = import.meta.env.VITE_API_BASE_URL + '/public/user/verify-otp';

        try {
            const response = await axios.post(apiUrl, otp);

            console.log(response.data);
            

            const updateResponse = {
                success: response.data.success,
                message: response.data.message
            }

            setApiResponse(updateResponse);

            console.log(response.data);

        } catch (error) {

           const  updateResponse = {
                success: error.response?.data?.success,
                message: error.response?.data?.message
            }

            setApiResponse(updateResponse);

            // console.error(error.response?.data);

        }

    }

    // handle otp field changes

    const handleOtpInputChange = (e) => {

        const updateData = {
            email: formData.email,
            otp: Number(e.target.value)

        }

        setOtp(updateData);
        console.log(e.target.value);


    }

    // email verify handler

    const verifyHandler = async () => {

        SetIsVerifyClicked(true);

        const apiUrl = import.meta.env.VITE_API_BASE_URL + "/public/user/send-mail";

        try {
            const response = await axios.post(apiUrl, {
                email: formData.email
            });
            // console.log(response.data);
            const updateResponse = {
                success: response.data.success,
                message: response.data.message
            }

            setApiResponse(updateResponse);

            setTimeout(() => {
               setApiResponse(
                {
                    success: false,
                    message: ""
                }
               )
            }, 8000);


            console.log(apiResponse);


        } catch (error) {
            console.error(error.response);

            const updateResponse = {
                success: error.response.data.success,
                message: error.response.data.message
            }

            setApiResponse(updateResponse);

            setTimeout(() => {
               setApiResponse(
                {
                    success: false,
                    message: ""
                }
               )
            }, 8000);

        }
    }






    return (
        <div>
            <div className="signup-container">
                <div className="signup-heading">
                    <h2>Create Your Account</h2>
                    <p>Learn Today, Lead Tomorrow</p>
                </div>

                <div className='signup-form-container'>

                    <form action="#" onSubmit={submitHandler}>

                        <div className="signup-field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                name='name'
                                id='name'
                                placeholder='Enter Your Full Name'
                                value={formData.name}
                                required
                                onChange={handleChange}
                            />

                            {errors && (
                                <div className="error">
                                    <p>{errors.name}</p>
                                </div>
                            )}
                        </div>

                        <div className="signup-field">
                            <label htmlFor="signup-email"> Email Address </label>

                            {apiResponse && (
                                <div className= {apiResponse.success ? "success" : "error"}>
                                    {apiResponse.message}
                                </div>
                            )
                            }

                            <div className="verification">
                                <input
                                    type="email"
                                    name='email'
                                    id='signup-email'
                                    placeholder='Enter your email'
                                    value={formData.email}
                                    required
                                    onChange={handleChange}
                                    disabled={isVerifyClicked}

                                    style={{ width: "70%" }}

                                />

                                {formData.email && (
                                    <div className="verify-container">
                                        {
                                            isVerifyClicked
                                                ? <button
                                                    onClick={verifyHandler}
                                                    type='button'
                                                    className='verify-btn'>
                                                    Resend Otp
                                                </button>

                                                : <button
                                                    onClick={verifyHandler}
                                                    type='button'
                                                    className='verify-btn'>
                                                    verify
                                                </button>
                                        }

                                    </div>

                                )}

                            </div>

                            {
                                isVerifyClicked ?


                                    <div className="otp-section">
                                        <input
                                            type="tel;"
                                            maxLength={6}
                                            name='otp'
                                            id='otp'
                                            placeholder='Enter your Otp'
                                            required
                                            style={{ width: "70%" }}
                                            onChange={handleOtpInputChange}

                                        />
                                        <button
                                            className='verify-btn'
                                            onClick={verifyOtpHandler}
                                            type='button'
                                        >
                                            Verify Otp
                                        </button>
                                    </div>

                                    : null
                            }



                            {errors && (
                                <div className="error">
                                    <p>{errors.email}</p>
                                </div>
                            )}
                        </div>

                        <div className="signup-field">
                            <label htmlFor="phone"> Phone Number </label>
                            <input
                                type="tel"
                                name='phone'
                                id='phone'
                                placeholder='Enter your phone number'
                                value={formData.phone}
                                required
                                onChange={handleChange}
                            />

                            {errors && (
                                <div className="error">
                                    <p>{errors.phone}</p>
                                </div>
                            )}
                        </div>

                        <div className="signup-field">
                            <label htmlFor="role"> Role </label>
                            <select id='role' name='role' required onChange={handleChange} value={formData.role}>

                                <option value="">Select Role</option>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </select>

                        </div>

                        <label> Gender </label>
                        <div className="select-gender">
                            <div className="male">
                                <input
                                    type="radio"
                                    name='gender'
                                    id='gender-male'
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    required
                                    onChange={handleChange}
                                />
                                <label htmlFor="gender-male">Male</label>
                            </div>

                            <div className="female">
                                <input
                                    type="radio"
                                    name='gender'
                                    id='gender-female'
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    required
                                    onChange={handleChange}
                                />
                                <label htmlFor="gender-female">Female</label>
                            </div>

                        </div>

                        {/* password */}

                        <div className="signup-password">
                            <label htmlFor="signup-password"> Enter your Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='Enter your password'
                                name="password"
                                id='signup-password'
                                value={formData.password}
                                required
                                onChange={handleChange}
                            />

                            <div className="show-password">
                                <button onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <Eye /> : <EyeOff />
                                    }

                                </button>
                            </div>

                            {errors && (
                                <div className="error">
                                    <p>{errors.password}</p>
                                </div>
                            )}
                        </div>

                        {/* confirm password */}

                        <div className="signup-password">
                            <label htmlFor="confirm-password"> Confirm Password</label>
                            <input
                                type={showConfirmPassowrd ? "text" : "password"}
                                placeholder='Enter your password'
                                name="confirmPassword"
                                id='confirm-password'
                                value={formData.confirmPassword}
                                required
                                onChange={handleChange}
                            />

                            <div className="show-password">
                                <button onClick={() => setShowConfirmPassword(!showConfirmPassowrd)}>
                                    {
                                        showConfirmPassowrd ? <Eye /> : <EyeOff />
                                    }

                                </button>
                            </div>

                            {errors && (
                                <div className="error">
                                    <p>{errors.confirmPassword}</p>
                                </div>
                            )}

                        </div>

                        {/* privacy check */}

                        <div className="privacy-policy">
                            <input
                                type="checkbox"
                                name="privacy-policy"
                                id="privacy-policy"
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                            />
                            <label htmlFor="privacy-policy">I agree to the Terms of Use and Privacy Policy</label>
                        </div>


                        <button disabled={!agree} type="submit" className='signup-btn'>
                            Sign
                        </button>

                    </form>
                </div>

            </div>


        </div>
    )
}

export default Signup;