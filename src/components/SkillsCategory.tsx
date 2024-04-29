import React from 'react';
import { motion } from "framer-motion";

import Image from 'next/image';

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
    <div className="card w-full bg-primary text-neutral-content h-full">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{skillCategoryName}</h2>
        <div className="flex flex-row gap-4 justify-center items-center">
          {skills.map(skill => {
            return (
              <motion.div
                className="tooltip" data-tip={skill.name}
                key={skill.name}
                whileHover={{
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.25 }
                }}
              >
                <Image
                  src={`/technologies/${skill.iconSrc}`}
                  alt={skill.name}
                  width={64}
                  height={64}
                  alt={skill.name}

                />

              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsCategory;
