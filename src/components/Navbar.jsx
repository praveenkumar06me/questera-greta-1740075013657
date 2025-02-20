import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-brown-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <FaCoffee className="text-2xl" />
            <Link to="/" className="text-xl font-bold">Coffee Haven</Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/order">Order</NavLink>
            <NavLink to="/rewards">Rewards</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/events">Events</NavLink>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center"
          >
            <FaUser className="text-xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <motion.div whileHover={{ y: -2 }}>
    <Link 
      to={to} 
      className="hover:text-brown-300 transition-colors duration-200"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;