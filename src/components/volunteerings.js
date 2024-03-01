import React, { useState } from 'react';

function Volunteerings({ toggleCategory, expandedCategories }) {
  const [volunteerings, setVolunteerings] = useState([
    { organization: '', taskDescription: '' }
  ]);

  const handleAddVolunteering = () => {
    setVolunteerings([...volunteerings, { organization: '', taskDescription: '' }]);
  };

  const handleRemoveVolunteering = (index) => {
    const newVolunteerings = [...volunteerings];
    newVolunteerings.splice(index, 1);
    setVolunteerings(newVolunteerings);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newVolunteerings = [...volunteerings];
    newVolunteerings[index][name] = value;
    setVolunteerings(newVolunteerings);
  };

  return (
    <div className="category">
      <h2 onClick={() => toggleCategory('volunteerings')}>Volunteerings</h2>
      {expandedCategories.volunteerings && (
        <div className="category-content">
          {volunteerings.map((volunteering, index) => (
            <div key={index} className="experience-block">
              <svg
                onClick={() => handleRemoveVolunteering(index)}
                height="30px"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
                fill="#6A59A0"
                viewBox="0 0 24 24"
                stroke="#6A59A0"
                className="remove-icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3></h3>
              <input
                className="input-style"
                type="text"
                name="organization"
                value={volunteering.organization}
                onChange={(e) => handleChange(index, e)}
                placeholder="Organization"
              />
              <textarea
                className="input-style"
                name="taskDescription"
                value={volunteering.taskDescription}
                onChange={(e) => handleChange(index, e)}
                placeholder="Task Description"
              />
            </div>
          ))}
          <center>
            <svg
              cursor="pointer"
              width="40px"
              height="40px"
              onClick={handleAddVolunteering}
              stroke="#6A59A0"
              fill="#6A59A0"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-add-circle-outline"
            >
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg>
          </center>
        </div>
      )}
    </div>
  );
}

export default Volunteerings;
