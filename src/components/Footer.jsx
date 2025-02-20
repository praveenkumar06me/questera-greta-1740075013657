import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Coffee Haven</h3>
            <p className="text-brown-300">Where coffee dreams come true</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-brown-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-brown-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-brown-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-brown-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-brown-300 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-brown-300 hover:text-white">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-brown-300 hover:text-white"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-brown-300 hover:text-white"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-brown-300 hover:text-white"
              >
                <FaInstagram size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brown-700 text-center text-brown-300">
          <p>&copy; {new Date().getFullYear()} Coffee Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;