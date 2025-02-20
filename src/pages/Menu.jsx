import { motion } from 'framer-motion';
import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'beverages', name: 'Other Beverages' }
  ];

  const menuItems = {
    coffee: [
      {
        name: 'Espresso',
        description: 'Rich and bold single shot',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a'
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
      },
      // Add more coffee items
    ],
    pastries: [
      {
        name: 'Croissant',
        description: 'Buttery and flaky',
        price: 3.75,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a'
      },
      // Add more pastry items
    ],
    beverages: [
      {
        name: 'Fresh Mint Tea',
        description: 'Organic mint leaves steeped in hot water',
        price: 3.25,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3'
      },
      // Add more beverage items
    ]
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-brown-900">Our Menu</h1>
      
      <div className="flex justify-center space-x-4">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${
              activeCategory === category.id
                ? 'bg-brown-600 text-white'
                : 'bg-brown-100 text-brown-800 hover:bg-brown-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems[activeCategory].map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({ name, description, price, image }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-brown-900">{name}</h3>
        <span className="text-brown-600 font-medium">${price.toFixed(2)}</span>
      </div>
      <p className="mt-2 text-brown-600">{description}</p>
      <button className="mt-4 w-full bg-brown-600 text-white py-2 rounded hover:bg-brown-700 transition-colors duration-200">
        Add to Order
      </button>
    </div>
  </motion.div>
);

export default Menu;