import React, { useState } from 'react';
import { countries } from 'countries-list';

const countryNames = Object.values(countries).map(country => country.name);

function Preferences({ toggleCategory, expandedCategories }) {
  const [preferences, setPreferences] = useState({
    jobType: '',
    jobLocation: '',
    lookingForJob: '',
    immediatelyAvailable: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPreferences({ ...preferences, [name]: value });
  };

  return (
    <div className="category">
      <h2 onClick={() => toggleCategory('preferences')}>Preferences</h2>
      {expandedCategories.preferences && (
        <div className="category-content">
          <div style={{ display: "flex","flex-direction":"row" }}>
          <h3>What is your preferred attendance formula ?</h3>

            <label>
              <input
                type="radio"
                name="jobType"
                value="online"
                checked={preferences.jobType === 'online'}
                onChange={handleChange}
              />
              Online
            </label>
            <label>
              <input
                type="radio"
                name="jobType"
                value="on site"
                checked={preferences.jobType === 'on site'}
                onChange={handleChange}
              />
              On Site
            </label>
            <label>
              <input
                type="radio"
                name="jobType"
                value="hybrid"
                checked={preferences.jobType === 'hybrid'}
                onChange={handleChange}
              />
              Hybrid
            </label>
          </div>
          <select
            className="input-style"
            name="jobLocation"
            value={preferences.jobLocation}
            onChange={handleChange}
          >
            <option value="">Preferred Job Location</option>
            {countryNames.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          <div style={{ display: "flex","flex-direction":"row" }}>
            <h3>Are you actively looking for a job ?</h3>
            <label>
              <input
                type="radio"
                name="lookingForJob"
                value="yes"
                checked={preferences.lookingForJob === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="lookingForJob"
                value="no"
                checked={preferences.lookingForJob === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <div style={{ display: "flex","flex-direction":"row" }}>
          <h3>Are you immediately available ?</h3>

            <label>
              <input
                type="radio"
                name="immediatelyAvailable"
                value="yes"
                checked={preferences.immediatelyAvailable === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="immediatelyAvailable"
                value="no"
                checked={preferences.immediatelyAvailable === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Preferences;
