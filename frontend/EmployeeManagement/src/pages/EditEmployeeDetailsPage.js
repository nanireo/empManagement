import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditEmployeeDetails from '../components/EditEmployeeDetails';
import axios from 'axios';

// import React from 'react';
// import { useParams } from 'react-router-dom';

const EditEmployeeDetailsPage = () => {
  let { id } = useParams();

  console.log( " id data updatePage " , id);

  const [employeeData, setContractorData] = useState(null);

  console.log( "contractorData from updatePage " , employeeData);


  useEffect(() => {
    // Fetch contractor data using the ID
    axios.get(`http://localhost:4000/api/employee/${id}`)
        .then((response) => {
          console.log( "after get the data upadatePage " + response);
            setContractorData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching contractor data:', error);
        });
}, [id]);


  return (
    
      <div className="Formpage-container">
            {employeeData && <EditEmployeeDetails employeeID={id} initialData={employeeData} />}
        </div>
   
  );
};

export default EditEmployeeDetailsPage;
