import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from './navbar';


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state for success message
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/employee');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching employee data');
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/employee/${id}`);
      console.log("Deleted Employee with ID:", id);
      fetchEmployees();
      setShowSuccessMessage(true); // Show success message after deleting
    } catch (error) {
      console.log("Error deleting Employee:", error);
    }
    setEmployeeToDelete(null);
    setShowConfirmation(false);
  };

  const handleDeleteConfirmation = (id) => {
    setEmployeeToDelete(id);
    setShowConfirmation(true);
  };

  const handleCancelDelete = () => {
    setEmployeeToDelete(null);
    setShowConfirmation(false);
  };

  const handleOkSuccess = () => {
    setShowSuccessMessage(false); // Hide success message on OK click
  };

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>

      <Link to="/CreateEmployeePage"><button>Create Employee</button></Link>
      <h2>Employee Table</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {showConfirmation && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <p>Are you sure you want to delete this employee?</p>
            <div style={buttonContainerStyle}>
              <button onClick={() => deleteEmployee(employeeToDelete)} style={yesButtonStyle}>Yes</button>
              <button onClick={handleCancelDelete} style={noButtonStyle}>No</button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div style={successMessageStyle}>
          <p>Employee deleted successfully!</p>
          <button onClick={handleOkSuccess}>OK</button>
        </div>
      )}
      {employees.length > 0 ? (
        <table style={tableStyle}>
          <thead>
            <tr style={rowStyle}>
              <th style={cellStyle}>EID</th>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>MobileNo</th>
              <th style={cellStyle}>Designation</th>
              <th style={cellStyle}>Gender</th>
              <th style={cellStyle}>Course</th>
              <th style={cellStyle}>Edit</th>
              <th style={cellStyle}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee._id} style={rowStyle}>
                <td style={cellStyle}>{employee.EID}</td>
                <td style={cellStyle}>{employee.Name}</td>
                <td style={cellStyle}>{employee.Email}</td>
                <td style={cellStyle}>{employee.MobileNo}</td>
                <td style={cellStyle}>{employee.Designation}</td>
                <td style={cellStyle}>{employee.Gender}</td>
                <td style={cellStyle}>{employee.Course}</td>
                <td style={cellStyle}><Link to={`/EditEmployeeDetailsPage/${employee._id}`} style={iconStyle}><MdEdit /></Link></td>
                <td style={cellStyle}><button onClick={() => handleDeleteConfirmation(employee._id)} style={iconStyle}><MdDelete /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No employees found.</div>
      )}
    </div>
  );
};

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
};

const rowStyle = {
  borderBottom: '1px solid #ddd',
};

const cellStyle = {
  padding: '8px',
  textAlign: 'left',
};

const iconStyle = {
  textDecoration: 'none',
  color: '#007bff',
  cursor: 'pointer',
};

const modalStyle = {
  position: 'fixed',
  zIndex: '1',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.4)',
};

const modalContentStyle = {
  backgroundColor: '#fefefe',
  margin: '20% auto ', 
  padding: '20px',
  border: '1px solid #888',
  width: '20%', 
};

const buttonContainerStyle = {
  textAlign: 'center', 
};

const yesButtonStyle = {
  backgroundColor: 'blue',
  color: 'white', // Text color set to white
  marginRight: '100px', 
};

const noButtonStyle = {
  backgroundColor: 'blue',
  color: 'white', // Text color set to white
  marginLeft: '10px', 
};

const successMessageStyle = {
  position: 'fixed',
  zIndex: '1',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fefefe',
  padding: '20px',
  border: '1px solid #888',
};

export default EmployeeList;
