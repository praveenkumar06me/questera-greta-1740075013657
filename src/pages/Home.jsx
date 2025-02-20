import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold text-brown-900">Welcome to Coffee Haven</h1>
        <p className="text-xl text-brown-700">Where every cup tells a story</p>
        <Link
          to="/menu"
          className="inline-block bg-brown-600 text-white px-8 py-3 rounded-full hover:bg-brown-700 transition-colors duration-200"
        >
          Explore Our Menu
        </Link>
      </motion.section>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Fresh Roasted"
          description="Premium beans roasted daily"
          image="https://images.unsplash.com/photo-1587734195502-9a21977462dd"
        />
        <FeatureCard
          title="Artisan Pastries"
          description="Baked fresh every morning"
          image="https://images.unsplash.com/photo-1509440159596-0249088772ff"
        />
        <FeatureCard
          title="Cozy Atmosphere"
          description="Your home away from home"
          image="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, image }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-brown-900">{title}</h3>
      <p className="text-brown-600 mt-2">{description}</p>
    </div>
  </motion.div>
);

export default Home;