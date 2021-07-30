import React from 'react';
import "./SkillsCategory.css";


interface SkillInterface {
  iconSrc: string;
  name: string;
}

interface SkillsCategoryInterface {
  skills: SkillInterface[];
  skillCategoryName: string;
}

function SkillsCategory({ skills, skillCategoryName } : SkillsCategoryInterface) {
  return (
    <div className="skill-category-container">
      <div className="skill-category-header">
      {skillCategoryName}
      </div>
      <div className="skill-category-content">
        {skills.map(skill => {
          return (
            <img src={skill.iconSrc} alt={skill.name} />
          )
        })}
      </div>
      
    </div>
  );
}

export default SkillsCategory;
