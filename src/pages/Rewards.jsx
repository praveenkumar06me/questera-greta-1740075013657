import { motion } from 'framer-motion';
import { FaStar, FaCoffee, FaGift } from 'react-icons/fa';

const Rewards = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-brown-900"
      >
        Coffee Haven Rewards
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        <RewardCard 
          icon={<FaCoffee />}
          title="Earn Points"
          description="Get 1 point for every dollar spent"
        />
        <RewardCard 
          icon={<FaStar />}
          title="Member Benefits"
          description="Free refills and birthday rewards"
        />
        <RewardCard 
          icon={<FaGift />}
          title="Redeem Rewards"
          description="Use points for free drinks and treats"
        />
      </div>
    </div>
  );
};

const RewardCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow-lg p-6 text-center"
  >
    <div className="text-4xl text-brown-600 mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-brown-900 mb-2">{title}</h3>
    <p className="text-brown-600">{description}</p>
  </motion.div>
);

export default Rewards;