import React, { useState } from 'react';

function TechnicalSkills({ toggleCategory, expandedCategories }) {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [proficiencyLevels, setProficiencyLevels] = useState({});

  const availableSkills = [
    { name: 'JavaScript', proficiencyLevels: ['Junior', 'Mid', 'Senior'] },
    { name: 'React', proficiencyLevels: ['Junior', 'Mid', 'Senior'] },
    { name: 'Node.js', proficiencyLevels: ['Junior', 'Mid', 'Senior'] },
    // Add more skills as needed
  ];

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkill(skill);
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setProficiencyLevels({ ...proficiencyLevels, [skill]: 'Junior' });
      setSelectedSkill(''); // Reset the dropdown value
    }
  };

  const handleProficiencyLevelClick = (skill, level) => {
    setProficiencyLevels({ ...proficiencyLevels, [skill]: level });
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove));
    setProficiencyLevels((prevLevels) => {
      const { [skillToRemove]: removedSkill, ...remainingSkills } = prevLevels;
      return remainingSkills;
    });
  };

  const isSelectedProficiency = (skill, level) => {
    return proficiencyLevels[skill] === level ? 'selected' : '';
  };

  return (
    <div className="category">
      <h2 onClick={() => toggleCategory('technicalSkills')}>Technical Skills</h2>
      {expandedCategories.technicalSkills && (
        <div className="category-content">
          <div>
            <select className="select-style" value={selectedSkill} onChange={handleSkillChange}>
              <option value="">Select a skill</option>
              {availableSkills.map((skill, index) => (
                <option key={index} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>
          {selectedSkills.length > 0 && (
            <div>
              <h3>Selected Skills</h3>
              {selectedSkills.map((skill, index) => (
                <div key={index}>
                  <h4>{skill}</h4>
                  {availableSkills.find((s) => s.name === skill)?.proficiencyLevels.map((level, index) => (
                    <button
                      key={index}
                      className={isSelectedProficiency(skill, level)}
                      onClick={() => handleProficiencyLevelClick(skill, level)}
                    >
                      {level}
                    </button>
                  ))}
                  <button onClick={() => handleRemoveSkill(skill)}>Remove</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TechnicalSkills;
