import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LinkedInProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make request to local server proxying LinkedIn API
        const response = await axios.get('http://localhost:5000/linkedin');
        setProfileData(response.data);
        console.log("DATA" + response.data);

      } catch (error) {
        console.error('Error fetching LinkedIn profile data:', error);
      }
    };

    fetchData();

  }, []);
  console.log("NOT DATA" + profileData);

  return (
    <div>
      {profileData ? (
        <>
          <h1>{profileData.sub}</h1>
          <h1>{profileData.given_name}</h1>
          <h1>{profileData.family_name}</h1>
          <img src={`${profileData.picture}`} alt="LinkedIn Profile Picture"/>
        </>
          ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LinkedInProfile;
