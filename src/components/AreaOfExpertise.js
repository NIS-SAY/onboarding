import React, { useState } from 'react';

function AreaOfExpertise({ expandedCategories, toggleCategory, expertiseOptions, preferredPosts }) {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  
  const handleExpertiseSelect = (option) => {
    setSelectedExpertise(option);
  };

  return (
    <div className="category">
      <h2 onClick={() => toggleCategory('areaOfExpertise')}>Area of Expertise</h2>
      {expandedCategories.areaOfExpertise && (
        <div className="category-content">
          <div>
          <h3>Preferred Posts</h3>
          <h5>What kind of offers you like to see on the platform?</h5>

            {expertiseOptions.map((option, index) => (
               <button
               key={index}
               type="button"
               style={{ height:"40px"}}
               onClick={() => handleExpertiseSelect(option)}
               className={`button ${selectedExpertise === option ? 'selected' : ''}`}
             >
               {option}
             </button>
            ))}
          </div>
          {selectedExpertise && ( // Only render if an expertise is selected
            <div className="checkbox-wrapper">
          <h5>select the postes you prefer:</h5>
              {preferredPosts.map((post, index) => (
                <div key={index} style={{marginBottom: "10px"}}>
                  <input type="checkbox" id={`checkbox-${index}`} name="preferredPosts" value={post} />
                  <label className="terms-label" htmlFor={`checkbox-${index}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" className="checkbox-svg">
                      <mask fill="white" id={`path-1-inside-1_476_5-${index}`}>
                        <rect height="200" width="200"></rect>
                      </mask>
                      <rect mask={`url(#path-1-inside-1_476_5-${index})`} strokeWidth="40" className="checkbox-box" height="200" width="200"></rect>
                      <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64" className="checkbox-tick"></path>
                    </svg>
                    <span className="label-text">{post}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AreaOfExpertise;
