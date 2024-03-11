import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";



const EditEmployeeDetails = ({ employeeID, initialData }) => {
    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/api/employee/${employeeID}`, formData);
            console.log('Employee updated successfully');
            alert("Employee Updated successfully");
            // Navigate upon successful update
            navigate('/EmployeeListPages');
        } catch (error) {
            console.error('Error updating employee:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: 'left' }}>Update Employee</h1>
            <div style={{ margin: 'auto', width: '50%', paddingTop: '10px' }}>
            <Link to="/EmployeeListPages">
                    <p style={formTitle}><IoIosClose /></p>
            </Link>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', width: '120px' }}>CID:</label>
                        <input type="text" style={{ width: '100%', flex: '1', height: '40px' }} name="EID" value={formData.EID} onChange={handleChange} />
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', width: '120px' }}>Contractor Name:</label>
                        <input type="text" style={{ width: '100%', flex: '1', height: '40px' }} name="Name" value={formData.Name} onChange={handleChange} />
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', width: '120px' }}>Contact:</label>
                        <input type="text" style={{ width: '100%', flex: '1', height: '40px' }} name="Email" value={formData.Email} onChange={handleChange} />
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', width: '120px' }}>Pan Number:</label>
                        <input type="text" style={{ width: '100%', flex: '1', height: '40px' }} name="MobileNo" value={formData.MobileNo} onChange={handleChange} />
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', width: '120px' }}>Number of Buses:</label>
                        <input type="text" style={{ width: '100%', flex: '1', height: '40px' }} name="Designation" value={formData.Designation} onChange={handleChange} />
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', width: '120px' }}>Monthly Payment:</label>
                        <input type="text" style={{ width: '100%', flex: '1', height: '40px' }} name="Gender" value={formData.Gender} onChange={handleChange} />
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px', width: '120px' }}>Course:</label>
                        <input type="text" style={{ width: '100%', flex: '1', height: '40px' }} name="Course" value={formData.Course} onChange={handleChange} />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Update Form</button>
                </form>
            </div>
        </>
    );
};
const formTitle = {
    textAlign: 'right',
    marginBottom: '2px',
    fontSize: '50px'
    
  };
  
export default EditEmployeeDetails;
