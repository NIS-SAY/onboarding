import React, { useState } from 'react';
import { countries } from 'countries-list';

const countryNames = Object.values(countries).map(country => country.name);

function Education({ toggleCategory, expandedCategories }) {
  const [educations, setEducations] = useState([
    { degree: '', institution: '', location: '', startDate: '', endDate: '' }
  ]);

  const handleAddEducation = () => {
    setEducations([...educations, { degree: '', institution: '', location: '', startDate: '', endDate: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    setEducations(newEducations);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newEducations = [...educations];
    newEducations[index][name] = value;
    setEducations(newEducations);
  };

  return (
    <div className="category">
      <h2 onClick={() => toggleCategory('education')}>Education</h2>
      {expandedCategories.education && (
        <div className="category-content">
          {educations.map((education, index) => (
            <div key={index} className="experience-block">
              <svg
                onClick={() => handleRemoveEducation(index)}
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
                name="degree"
                value={education.degree}
                onChange={(e) => handleChange(index, e)}
                placeholder="Degree"
              />
              <input
                className="input-style"
                type="text"
                name="institution"
                value={education.institution}
                onChange={(e) => handleChange(index, e)}
                placeholder="Educational Institution"
              />
              <select
                className="input-style"
                name="location"

                value={education.location}
                onChange={(e) => handleChange(index, e)}
              >
                <option value="">Select a Country</option>
                {countryNames.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <h4>Start Date</h4>
              <input
                className="input-style"
                type="month"

                name="startDate"
                value={education.startDate}
                onChange={(e) => handleChange(index, e)}
              />
              <h4>End Date</h4>
              <input
                className="input-style"
                type="month"

                name="endDate"
                value={education.endDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          ))}
          <center>
            <svg
              cursor="pointer"
              width="40px"
              height="40px"
              onClick={handleAddEducation}
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

export default Education;
