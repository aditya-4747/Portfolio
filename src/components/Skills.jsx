import React from 'react';
import SkillBox from './SkillBox';
import Section from './Section';

const Skills = () => {
  return (
    <Section id="skills" className="bg-black text-white py-10 relative">
        <h2 className="text-5xl font-bold text-blue-500 mb-8 font-ysabeau w-fit mx-auto">Skills</h2>
        <div className='grid grid-cols-2 grid-rows-4 px-28 max-sm:px-0 max-sm:grid-cols-1'>
            <SkillBox />
            <SkillBox />
            <SkillBox />
            <SkillBox />
            <SkillBox />
            <SkillBox />
            <SkillBox />
            <SkillBox />
        </div>
    </Section>
  )
}

export default Skills