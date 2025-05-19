import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Skills & Certifications</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-16 mt-14">
        {technologies.map((technology) => (
          <div className="group relative w-32 h-32" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition text-sm text-center bg-gray-600 text-white px-2 py-1 rounded shadow-lg z-10">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
