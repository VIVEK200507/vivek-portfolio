import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey! I’m a Vibe Coder—passionate about AI, Python, software testing, and everything tech. I love jumping into projects—like AI hackathons and internships—where I get to build, test, and experiment with solutions that actually make an impact.

        I’m all about data analysis and visualization, rocking Pandas, NumPy, and Matplotlib to spot trends, uncover insights, and make data speak. I also leverage AI tools whenever I can to save time, energy, and effort, making my workflow smarter and more efficient.

        On top of that, I bring strong team, time, and project management vibes, helping me lead, collaborate, and deliver effectively.

        I’m looking to join a team that’s innovative, collaborative, and growth-driven, where I can bring my energy, ideas, and passion for tech.

        💡 Fun fact: I thrive on AI experiments, coding hacks, data visualizations, and anything that lets me think, create, and vibe with tech efficiently.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
