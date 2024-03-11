import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
    const [formData, setFormData] = useState({
        EID: '',
        Name: '',
        Email: '',
        MobileNo: '',
        Designation: '',
        Gender: '',
        Course: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErrors = {};
        let isValid = true;

        if (!formData.EID || !formData.Name || !formData.Email || !formData.MobileNo || !formData.Designation || !formData.Gender || !formData.Course) {
            formErrors = {
                ...formErrors,
                allFields: 'Please fill out all required fields.'
            };
            isValid = false;
        }

        if (formData.Email && !validateEmail(formData.Email)) {
            formErrors = {
                ...formErrors,
                email: 'Please enter a valid email address.'
            };
            isValid = false;
        }

        const intFields = ['EID', 'MobileNo'];
        intFields.forEach(field => {
            if (formData[field] && !Number.isInteger(Number(formData[field]))) {
                formErrors = {
                    ...formErrors,
                    [field]: 'Please enter a valid integer.'
                };
                isValid = false;
            }
        });

        if (!isValid) {
            setErrors(formErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/api/employee', formData);
            if (response.status === 201) {
                setSuccessMessage('Employee data submitted successfully!');
                alert("Employee added  successfully")
                navigate('/EmployeeListPages');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrors({ allFields: 'An error occurred while submitting employee data' });
        }

        setFormData({
            EID: '',
            Name: '',
            Email: '',
            MobileNo: '',
            Designation: '',
            Gender: '',
            Course: ''
        });
        setErrors({});
        setSuccessMessage('');
    };

    return (
        <>
            <Navbar />
            <h2>Employee Form</h2>
            <div style={formContainer}>
                <Link to="/EmployeeListPages">
                    <p style={formTitle}><IoIosClose /></p>
                </Link>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={formGroup}>
                        <label style={labelStyle}>EID:</label>
                        <input type="number" name="EID" value={formData.EID} onChange={handleChange} style={inputStyle} />
                        {errors.EID && <span style={errorMessage}>{errors.EID}</span>}
                    </div>
                    <div style={formGroup}>
                        <label style={labelStyle}>Name:</label>
                        <input type="text" name="Name" value={formData.Name} onChange={handleChange} style={inputStyle} />
                        {errors.Name && <span style={errorMessage}>{errors.Name}</span>}
                    </div>
                    <div style={formGroup}>
                        <label style={labelStyle}>Email:</label>
                        <input type="email" name="Email" value={formData.Email} onChange={handleChange} style={inputStyle} />
                        {errors.Email && <span style={errorMessage}>{errors.Email}</span>}
                    </div>
                    <div style={formGroup}>
                        <label style={labelStyle}>Mobile Number:</label>
                        <input type="tel" name="MobileNo" value={formData.MobileNo} onChange={handleChange} style={inputStyle} />
                        {errors.MobileNo && <span style={errorMessage}>{errors.MobileNo}</span>}
                    </div>
                    <div style={formGroup}>
                        <label style={labelStyle}>Designation:</label>
                        <input type="text" name="Designation" value={formData.Designation} onChange={handleChange} style={inputStyle} />
                        {errors.Designation && <span style={errorMessage}>{errors.Designation}</span>}
                    </div>
                    <div style={formGroup}>
                        <label style={labelStyle}>Gender:</label>
                        <input type="text" name="Gender" value={formData.Gender} onChange={handleChange} style={inputStyle} />
                        {errors.Gender && <span style={errorMessage}>{errors.Gender}</span>}
                    </div>
                    <div style={formGroup}>
                        <label style={labelStyle}>Course:</label>
                        <input type="text" name="Course" value={formData.Course} onChange={handleChange} style={inputStyle} />
                        {errors.Course && <span style={errorMessage}>{errors.Course}</span>}
                    </div>
                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
                {errors.allFields && <div style={errorMessage}>{errors.allFields}</div>}
                {successMessage && <div style={successMessageStyle}>{successMessage}</div>}
            </div>
        </>
    );
};

const formContainer = {
    width: '50%',
    margin: 'auto',
    borderRadius: '5px',
};

const formTitle = {
    textAlign: 'right',
    marginBottom: '2px',
    fontSize: '50px'
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const formGroup = {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
};

const labelStyle = {
    width: '120px',
    marginRight: '10px',
};

const inputStyle = {
    flex: '1',
    height: '40px',
};

const buttonStyle = {
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const errorMessage = {
    color: 'red',
    marginTop: '5px',
    display: 'block',
};

const successMessageStyle = {
    color: 'green',
    marginTop: '5px',
    display: 'block',
};

export default CreateEmployee;
