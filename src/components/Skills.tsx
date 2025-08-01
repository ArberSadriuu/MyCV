import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs } from 'react-icons/si';
import { MdOutlineGroups, MdOutlineHandshake, MdOutlinePsychology, MdOutlineAutorenew } from 'react-icons/md';
import { useFadeInOnView } from './useFadeInOnView';
import Section from './Section';
import { useTranslation } from 'react-i18next';

interface Skill {
  name: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const usingNow: Skill[] = [
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact size={52} className="text-blue-400 drop-shadow-lg" />, highlight: true },
  { name: 'TypeScript', icon: <SiTypescript size={52} className="text-blue-700 drop-shadow-lg" />, highlight: true },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
];

const learning: Skill[] = [
  { name: 'MySQL', icon: <SiMysql size={40} className="text-blue-700" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-gray-900" /> },
];

const otherSkills: Skill[] = [
  { name: 'Communication', icon: <MdOutlineGroups size={40} className="text-blue-400" /> },
  { name: 'Teamwork', icon: <MdOutlineHandshake size={40} className="text-green-500" /> },
  { name: 'Problem Solving', icon: <MdOutlinePsychology size={40} className="text-yellow-500" /> },
  { name: 'Adaptability', icon: <MdOutlineAutorenew size={40} className="text-purple-500" /> },
];

const Skills: React.FC = () => {
  const { ref, fadeInClass } = useFadeInOnView();
  const { t } = useTranslation();
  return (
    <div ref={ref} className={fadeInClass}>
      <Section id="skills" className="py-24 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-charcoal tracking-wide">{t('skills.heading')}</h2>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-charcoal mb-8 uppercase tracking-widest">{t('skills.usingNow')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8 justify-items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              {usingNow.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110 group ${skill.highlight ? 'animate-glow rounded-xl bg-blue-50/50 p-6 border border-blue-200' : 'bg-gray-50/50 rounded-xl p-4 border border-gray-200'}`}
                >
                  {skill.icon}
                  <span className={`mt-3 text-charcoal text-sm font-semibold transition-colors group-hover:text-primary ${skill.highlight ? 'font-bold text-primary' : ''}`}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-charcoal mb-8 uppercase tracking-widest">{t('skills.learning')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              {learning.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110 group bg-orange-50/50 rounded-xl p-4 border border-orange-200">
                  {skill.icon}
                  <span className="mt-3 text-charcoal text-sm font-semibold transition-colors group-hover:text-primary">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-charcoal mb-8 uppercase tracking-widest">{t('skills.other')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8 justify-items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              {otherSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110 group bg-green-50/50 rounded-xl p-4 border border-green-200">
                  {skill.icon}
                  <span className="mt-3 text-charcoal text-sm font-semibold transition-colors group-hover:text-primary">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills; 