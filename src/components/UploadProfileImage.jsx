import { CircleCheck, CircleUser, CloudUpload, Minus } from 'lucide-react'
import '../styles/profileImage.css'
import { useRef, useState } from 'react'
import useAuth from '../context/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadProfileImage = () => {

    const [error, setError] = useState("");
    const [file, setFile] = useState(null);
    const {user, token} = useAuth();
    const [response, setResponse] = useState("");
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        console.log("file change handle call");
        

        if(!selectedFile){
           return;
        }

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ];

        if(!allowedTypes.includes(selectedFile.type)){
            setError("This file type not allowed")
            setFile(null)
            return
        }

        setFile(selectedFile)
        console.log(selectedFile.name);

    }

    const profileImageHandler = async () => {
        const apiUrl = import.meta.env.VITE_API_BASE_URL + "/user/upload-profile-image"
        console.log(apiUrl);
        console.log(user);
        console.log(token);
        

       const formData = new FormData();
       formData.append("file", file);
       formData.append("userId", user.id);


        console.log(formData);

        try {
            const response = await axios.post(
                apiUrl,
                formData,
                {
                    headers:{
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            setResponse(response)
            
        } catch (error) {
            setResponse(response)
        }
        navigate("/dashboard");
    }

    return (
        <div className='profile-image-container'>
            <div className="profile-image-section">
                <div className="profile-image-navbar">
                    <div className="user-details">
                        <h4>Ranjeet Diwakar</h4>
                        <p>Admin</p>
                    </div>

                    <div className="registration">
                        <p>Registration Successfull</p>
                    </div>
                </div>

                <div className="user-status">

                    <div className="register completed">
                        <CircleCheck />
                        <p>1. Register</p>
                    </div>

                    <div className="progress-line active"></div>

                    <div className="register current">
                        <CircleUser />
                        <p>2. Upload Profile Image</p>
                    </div>

                    <div className="progress-line"></div>

                    <div className="register pending">
                        <CircleCheck />
                        <p>3. Completed</p>
                    </div>

                </div>

                {/* upload profile image welcome */}
                <div className="image-upload-section">
                    <div className="welcome-msg">
                        <h1>Welcome!</h1>
                        <p>Your account has been created successfully.
                            Please upload your profile image to complete
                            your registration.
                        </p>
                    </div>

                    <div className="select-file">
                        <CloudUpload className='upload-cloud'/>
                        <h6>Upload Your Profile Image</h6>
                        <p>JPG, PNG (Max. 2MB)</p>
                        <input 
                            type="file" 
                            name='file' 
                            id='file' 
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handleFileChange} 
                        />
                        <label htmlFor="file">Select Image</label>

                        {
                            error ? ( <div className="error">
                                <p>{error}</p>
                            </div>) :null
                            
                        }
                        

                        <p> or drag & drop here</p>

                        {
                            response ? <div style={{color:"red"}}>
                                <p>{response.data.message}</p>
                            </div>:null
                        }

                    </div>
                </div>

                <div className="upload-btn">
                    <button>
                        Skip
                    </button>

                    <button
                        onClick={profileImageHandler}
                    >
                        Upload
                    </button>
                </div>

            </div>

        </div>
    )
}

export default UploadProfileImage