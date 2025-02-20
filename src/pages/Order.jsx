import { motion } from 'framer-motion';
import { useState } from 'react';

const Order = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-brown-900"
      >
        Place Your Order
      </motion.h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-center text-lg text-brown-600">
          Order functionality coming soon! Check back for mobile ordering.
        </p>
      </div>
    </div>
  );
};

export default Order;