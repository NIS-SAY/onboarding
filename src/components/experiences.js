import React, { useState } from 'react';
import { countries } from 'countries-list';

const countryNames = Object.values(countries).map(country => country.name);

function Experiences({ toggleCategory, expandedCategories }) {
  const [experiences, setExperiences] = useState([
    { company: '', location: '', startDate: '', endDate: '' }
  ]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: '', location: '', startDate: '', endDate: '' }]);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  return (
    <div className="category">
      <h2 onClick={() => toggleCategory('experiences')}>Experiences</h2>
      {expandedCategories.experiences && (
        <div className="category-content">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-block">
              <svg
                onClick={() => handleRemoveExperience(index)}
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
              <h1></h1>
              <input
                className="input-style"
                type="text"
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(index, e)}
                placeholder="Company Name"
              />
                <select
                className="input-style"
                name="country"
                value={experience.country}
                onChange={(e) => handleChange(index, e)}
              >
                <option value="">Company location</option>
                {countryNames.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <h4>Start Date</h4>
              <input
                className="input-style"
                type="month"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(index, e)}
              />
              <h4>End Date</h4>
              <input
                className="input-style"
                type="month"
                name="endDate"
                value={experience.endDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          ))}
                <center>
                <svg cursor="pointer" width= "40px" height="40px" onClick={handleAddExperience} stroke="#6A59A0" fill="#6A59A0" stroke-width="0" viewBox="0 0 24 24" class="svg-add-circle-outline"  xmlns="http://www.w3.org/2000/svg"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>

                </center>

        </div>
      )}
    </div>
  );
}

export default Experiences;
