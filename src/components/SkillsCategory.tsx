import React from 'react';
import { motion } from "framer-motion"
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
            <motion.img
              key={skill.name}
              src={skill.iconSrc}
              alt={skill.name}
              whileHover={{
                rotateY:[0, 25],
                transition: { duration: 0.25 }
              }}
            />
          )
        })}
      </div>
      
    </div>
  );
}

export default SkillsCategory;
