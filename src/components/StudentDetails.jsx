import React, { useState } from "react";
import '../styles/studentdetails.css';

const StudentDetails = () => {

    const [student, setStudent] = useState({
        rollNumber: "",
        name: "",
        standard: "",
        section: "",
        dataOfAdmission: "",
        dob: "",
        religion: "",
        category: "",
        pincode: "",
        guardian: "",
        guardianNumber: "",
        currentAddress: "",
        permanentAddress: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Student Details:", student);

        // API call will be added here
    };

    return (
        <div className="student-profile-container">

            <div className="student-profile-header">
                <h2>Complete Your Student Profile</h2>
                <p>Enter complete student information</p>
            </div>

            <form
                className="student-profile-form"
                onSubmit={handleSubmit}
            >

                {/* Basic Information */}
                <div className="form-section">

                    <div className="form-section-title">
                        <h3>Basic Information</h3>
                    </div>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Roll Number</label>
                            <input
                                type="number"
                                name="rollNumber"
                                value={student.rollNumber}
                                onChange={handleChange}
                                placeholder="Enter roll number"
                            />
                        </div>

                        <div className="form-group">
                            <label>Student Name</label>
                            <input
                                type="text"
                                name="name"
                                value={student.name}
                                onChange={handleChange}
                                placeholder="Enter student name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Standard</label>
                            <input
                                type="text"
                                name="standard"
                                value={student.standard}
                                onChange={handleChange}
                                placeholder="e.g. 10th"
                            />
                        </div>

                        <div className="form-group">
                            <label>Section</label>
                            <input
                                type="text"
                                name="section"
                                value={student.section}
                                onChange={handleChange}
                                placeholder="e.g. A"
                            />
                        </div>

                        <div className="form-group">
                            <label>Date of Admission</label>
                            <input
                                type="date"
                                name="dataOfAdmission"
                                value={student.dataOfAdmission}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={student.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Religion</label>
                            <select
                                name="religion"
                                value={student.religion}
                                onChange={handleChange}
                            >
                                <option value="">Select Religion</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Sikh">Sikh</option>
                                <option value="Christian">Christian</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Category</label>
                            <select
                                name="category"
                                value={student.category}
                                onChange={handleChange}
                            >
                                <option value="">Select Category</option>
                                <option value="General">General</option>
                                <option value="OBC">OBC</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                                <option value="EWS">EWS</option>
                            </select>
                        </div>

                    </div>
                </div>


                {/* Guardian Information */}
                <div className="form-section">

                    <div className="form-section-title">
                        <h3>Guardian Information</h3>
                    </div>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Guardian Name</label>
                            <input
                                type="text"
                                name="guardian"
                                value={student.guardian}
                                onChange={handleChange}
                                placeholder="Enter guardian name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Guardian Phone Number</label>
                            <input
                                type="tel"
                                name="guardianNumber"
                                value={student.guardianNumber}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                maxLength="10"
                            />
                        </div>

                    </div>
                </div>


                {/* Address Information */}
                <div className="form-section">

                    <div className="form-section-title">
                        <h3>Address Information</h3>
                    </div>

                    <div className="form-grid">

                        <div className="form-group form-group-full">
                            <label>Current Address</label>
                            <textarea
                                name="currentAddress"
                                value={student.currentAddress}
                                onChange={handleChange}
                                placeholder="Enter current address"
                                rows="3"
                            />
                        </div>

                        <div className="form-group form-group-full">
                            <label>Permanent Address</label>
                            <textarea
                                name="permanentAddress"
                                value={student.permanentAddress}
                                onChange={handleChange}
                                placeholder="Enter permanent address"
                                rows="3"
                            />
                        </div>

                        <div className="form-group">
                            <label>Pincode</label>
                            <input
                                type="number"
                                name="pincode"
                                value={student.pincode}
                                onChange={handleChange}
                                placeholder="Enter pincode"
                                maxLength="6"
                            />
                        </div>

                    </div>
                </div>


                {/* Buttons */}
                <div className="form-actions">

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() =>
                            setStudent({
                                rollNumber: "",
                                name: "",
                                standard: "",
                                section: "",
                                dataOfAdmission: "",
                                dob: "",
                                religion: "",
                                category: "",
                                pincode: "",
                                guardian: "",
                                guardianNumber: "",
                                currentAddress: "",
                                permanentAddress: ""
                            })
                        }
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Save Student
                    </button>

                </div>

            </form>
        </div>
    );
};

export default StudentDetails;