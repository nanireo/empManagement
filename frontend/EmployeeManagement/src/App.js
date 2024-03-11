import './App.css';
import LoginFromPage from './pages/loginFromPage';
import Dashboard from './pages/DashboardPage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import EmployeeListPages from './pages/EmployeeListPage';
import EditEmployeeDetailsPage from './pages/EditEmployeeDetailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header style={headerStyle}>
      <div style={headerContainer}>
        <img src="unnamed.png" alt="hello" style={logoStyle} />
        {/* <ul style={ulStyle}>
          <li style={listItemStyle}>
            <Link to="Dashboard">
              <button style={buttonStyle}>Home</button>
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/EmployeeListPages">
              <button style={buttonStyle}>Employee List</button>
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link>
              <button style={buttonStyle}>Logout</button>
            </Link>
          </li>
        </ul> */}
      </div>
    </header>
  );
};

const headerStyle = {
 // backgroundColor: '#333', 
};

const headerContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
};

const logoStyle = {
  width: '100px',
  height: '100px',
};

// const ulStyle = {
//   listStyle: 'none',
//   display: 'flex',
// };

// const listItemStyle = {
//   marginRight: '10px',
// };

// const buttonStyle = {
//   padding: '5px 10px',
//   background: '#007bff',
//   color: '#fff',
//   border: 'none',
//   cursor: 'pointer',
// };

function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderBar/>
        <Routes>
          <Route path="/" element={<LoginFromPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CreateEmployeePage" element={<CreateEmployeePage />} />
          <Route path="/EmployeeListPages" element={<EmployeeListPages />} />
          <Route path="/EditEmployeeDetailsPage/:id" element={<EditEmployeeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
