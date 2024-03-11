// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [f_userName, setUserName] = useState('');
  const [f_Pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', { "f_userName":f_userName, "f_Pwd":f_Pwd });
      if (response.data.success) {
        let BackendMessage = response.data.message;
        alert( BackendMessage );
        navigate('/Dashboard');
        console.log(BackendMessage);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          // height: '100vh', 
          // backgroundColor: '#f0f0f0' 
      }}>
        
        <form onSubmit={handleSubmit} style={{ 
            width: '500px',
            padding: '20px', 
            border: '1px solid #ccc',
            borderRadius: '5px',
        }}>
          <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
            <label style={{ fontSize: '25px', marginRight: '10px' }}>Username </label>
            <input type="text" 
                   style={{ 
                       width: '100%', 
                       padding: '10px', 
                       borderRadius: '5px',  
                       color: '#000', 
                   }} 
                   placeholder="Enter your username" 
                   value={f_userName} 
                   onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
            <label style={{ fontSize: '25px', marginRight: '10px' }}>Password </label>
            <input type="password" 
                   style={{ 
                       width: '100%', 
                       padding: '10px', 
                       borderRadius: '5px',  
                       color: '#000', 
                   }} 
                   placeholder="Enter your password" 
                   value={f_Pwd} 
                   onChange={(e) => setPwd(e.target.value)} />
          </div>
          <button type="submit" style={{ 
              width: '100%', 
              padding: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              backgroundColor: '#4CAF50', 
              color: '#fff', 
              cursor: 'pointer',
              fontSize: '25px'
          }}>Login</button>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
