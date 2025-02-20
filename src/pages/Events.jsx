import { motion } from 'framer-motion';
import { format } from 'date-fns';

const Events = () => {
  const events = [
    {
      title: "Coffee Tasting Workshop",
      date: new Date(2024, 3, 15),
      description: "Join our expert baristas for a guided tasting of our newest coffee selections.",
      image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb"
    },
    {
      title: "Latte Art Class",
      date: new Date(2024, 3, 22),
      description: "Learn the basics of latte art from our skilled baristas.",
      image: "https://images.unsplash.com/photo-1534415378365-1e2ed59e34ac"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-brown-900"
      >
        Upcoming Events
      </motion.h1>

      <div className="space-y-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ title, date, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div className="md:flex">
      <div className="md:w-1/3">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-2xl font-semibold text-brown-900 mb-2">{title}</h3>
        <p className="text-brown-600 mb-4">
          {format(date, 'MMMM d, yyyy')}
        </p>
        <p className="text-brown-700">{description}</p>
        <button className="mt-4 bg-brown-600 text-white px-6 py-2 rounded hover:bg-brown-700 transition-colors duration-200">
          Register Now
        </button>
      </div>
    </div>
  </motion.div>
);

export default Events;