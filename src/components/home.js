import React from 'react';
import Onboarding from './onboarding';
const Home = () => {
  // return (
  //   <button onClick={handleImport}>Import LinkedIn</button>
  // );
  return (
    <>
    <Onboarding/>
    </>
  )
};

const handleImport = () => {
  // Handle LinkedIn import logic here
  console.log('Importing from LinkedIn...');
  window.location.href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=997755331&scope=email&client_id=78rgom6c3nciik&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fresult"
};

export default Home;
