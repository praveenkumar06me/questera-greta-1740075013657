import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Locations = () => {
  const locations = [
    {
      name: "Downtown",
      address: "123 Main St, City Center",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-7pm",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814"
    },
    {
      name: "Westside",
      address: "456 West Ave, Shopping District",
      phone: "(555) 234-5678",
      hours: "Mon-Sun: 7am-9pm",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-brown-900"
      >
        Our Locations
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </div>
    </div>
  );
};

const LocationCard = ({ name, address, phone, hours, image }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-brown-900 mb-4">{name}</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-brown-600 mr-3" />
          <span>{address}</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-brown-600 mr-3" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center">
          <FaClock className="text-brown-600 mr-3" />
          <span>{hours}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Locations;