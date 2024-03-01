import React , { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Result = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');    
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log(code);

            // Make request to local server proxying LinkedIn API
            const response = await axios.get(`http://localhost:5000/linkedin?code=${code}`);
            setProfileData(response.data);
    
          } catch (error) {
            console.error('Error fetching LinkedIn profile data:', error);
          }
        };
    
        fetchData();
    
      }, []);
  return (
    <div>
    {profileData ? (
      <>
        <h1>DONE</h1>
        <p>{JSON.stringify(profileData)}</p>
       
      </>
        ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};



export default Result;
