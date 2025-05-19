import { motion } from 'framer-motion';
import { textVariant, fadeIn, staggerContainer } from '../utils/motion';
import { certifications } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const CertificationCard = ({ cert, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.6)}
    className="group relative bg-gray-900 bg-opacity-70 rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto"
    onClick={() => cert.link && window.open(cert.link, '_blank')}
  >
    <div className="flex justify-center items-center w-20 h-20 mx-auto mb-4">
      <img
        src={cert.icon}
        alt={cert.name}
        className="w-full h-full object-contain"
      />
    </div>

    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl pointer-events-none" />

    <h2 className="text-xl font-semibold text-timberWolf mb-2 transition-colors duration-300 group-hover:text-white text-center">
      {cert.name}
    </h2>
    <p className="text-md italic text-silver mb-1 transition-opacity duration-300 group-hover:opacity-90 text-center">
      {cert.date}
    </p>
  </motion.div>
);

const Certifications = () => (
  <>
    <motion.div>
      <h2 className={styles.sectionHeadTextLight}>Certifications</h2>
    </motion.div>

    <div className="flex justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
      >
        {certifications.map((cert, i) => (
          <CertificationCard key={`${cert.id}-copy`} cert={cert} index={i} />
        ))}
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(Certifications, '');
