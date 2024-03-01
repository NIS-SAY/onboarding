import React, { useState } from 'react';
import './style/onboarding.css';
import sampleImage from './side.jpg'; // Import your image
import LinkedInImage from './Linkedin-logo.png'; // Import your image
import AreaOfExpertise from './AreaOfExpertise'; // Import the separate component
import TechnicalSkills from './technicalSkills';
import Experiences from './experiences';
import Education from  './education';
import Volunteerings from  './volunteerings';
import Preferences from  './preferences';
const expertiseOptions = [
  "Software Engineering",
  "Marketing",
  "Data Analyses",
  "Product Management",
  // Add more options as needed
];

const preferredPosts = [
  "Job 1",
  "Job 2",
  "Job 3",
  // Add more options as needed
];
function Onboarding() {
  const [expandedCategories, setExpandedCategories] = useState({
    generalInfo: true,
    technicalSkills: false,
    areaOfExpertise: false,
    experiences: false,
    education: false,
    volunteerings: false,
    preferences: false,
  });

  const toggleCategory = (category) => {
    const updatedCategories = {};
    for (const key in expandedCategories) {
      updatedCategories[key] = key === category ? !expandedCategories[category] : false;
    }
    setExpandedCategories(updatedCategories);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Here, you can handle form submission, such as sending data to a server

    // For example, you can log the form data to the console
    const formData = new FormData(event.target);
    for (let entry of formData.entries()) {
      console.log(entry[0] + ': ' + entry[1]);
    }
  };






  return (
    <div className="Onboarding">
      <img src={sampleImage}  className="side-image" />
      
      <form onSubmit={handleSubmit}>
      <div className="import">
        <h2 >Help us know you more</h2>
        <center>
        <img src={LinkedInImage}  className="linkenIn-import-data" />

        </center>


      </div>
      <div className="category">
        <h2 onClick={() => toggleCategory('generalInfo')}>General Info</h2>
        {expandedCategories.generalInfo && (
          <div className="category-content">
            {/* Your form fields for general info */}
      <input type="text" className="input-style" name="firstName" placeholder="First Name" />
      <input type="text" className="input-style" name="lastName" placeholder="Last Name" />
      <input type="email" className="input-style" name="email" placeholder="Email" />
      <input type="password" className="input-style" name="password" placeholder="Password" />
      <input type="file" className="input-style" name="avatar" accept="image/*" />
      <input type="text" className="input-style" name="country" placeholder="Country" />
      <input type="tel" className="input-style" name="phoneNumber" placeholder="Phone Number" />
      <input type="text" className="input-style" name="language" placeholder="Language" />
      {/* Add more fields as needed */}
          </div>
        )}
      </div>
      <AreaOfExpertise
          expandedCategories={expandedCategories}
          toggleCategory={toggleCategory}
          expertiseOptions={expertiseOptions}
          preferredPosts={preferredPosts}
        />
      <TechnicalSkills toggleCategory={toggleCategory} expandedCategories={expandedCategories} />
      <Experiences toggleCategory={toggleCategory} expandedCategories={expandedCategories} />
      <Education toggleCategory={toggleCategory} expandedCategories={expandedCategories}/>
      <Volunteerings toggleCategory={toggleCategory} expandedCategories={expandedCategories}/>
      <Preferences toggleCategory={toggleCategory} expandedCategories={expandedCategories}/>


      
      <center>
      <button type="submit" style={{width: "200px", height:"40px"}}>Submit</button>
      </center>
    </form>
    </div>
  );
}

export default Onboarding;
