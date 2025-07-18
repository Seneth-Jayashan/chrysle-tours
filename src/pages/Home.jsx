import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero-bg.jpg';

const featuredDestinations = [
  { name: 'Sigiriya', description: 'Climb the iconic Lion Rock fortress and witness breathtaking ancient frescoes and panoramic views.', image: 'path/to/sigiriya.jpg', link: '/services#sigiriya' },
  { name: 'Kandy', description: 'Explore the cultural capital, home to the sacred Temple of the Tooth Relic and lush botanical gardens.', image: 'path/to/kandy.jpg', link: '/services#kandy' },
  { name: 'Yala National Park', description: 'Embark on an thrilling safari to spot elusive leopards, majestic elephants, and diverse wildlife.', image: 'path/to/yala.jpg', link: '/services#yala' },
  { name: 'Galle Fort', description: 'Wander through the UNESCO World Heritage Site, a charming colonial fort with Dutch architecture and vibrant streets.', image: 'path/to/galle.jpg', link: '/services#galle' },
  // Add more destinations
];

const specialInterests = [
  { name: 'Wildlife Safaris', description: 'Encounter leopards, elephants, and exotic birds in their natural habitats.', icon: '🐾' }, // Use actual SVG icons in production
  { name: 'Cultural & Heritage Trails', description: 'Step back in time through ancient cities and sacred temples.', icon: '🏛️' },
  { name: 'Adventure & Outdoors', description: 'Hike majestic mountains, surf pristine beaches, or raft exhilarating rivers.', icon: '⛰️' },
  { name: 'Beach & Relaxation', description: 'Unwind on golden sands, swim in turquoise waters.', icon: '🏖️' },
  { name: 'Culinary & Tea Experiences', description: 'Savor authentic Sri Lankan flavors and explore lush tea plantations.', icon: '☕' },
  { name: 'Eco-Tourism & Sustainable Travel', description: 'Travel responsibly and connect deeply with nature and local communities.', icon: '🌿' },
];

const testimonials = [
  { quote: "Chrysle Tours crafted the most incredible honeymoon for us! Every detail was perfect, from the stunning hotels to the insightful guides.", name: "Sarah & Mark T.", origin: "UK" },
  { quote: "Our family trip to Sri Lanka was a dream come true, thanks to Chrysle Tours. The wildlife safari was unforgettable!", name: "The Rodriguez Family", origin: "USA" },
  { quote: "I loved the flexibility and local insights Chrysle Tours provided. It truly felt like a personalized adventure.", name: "David L.", origin: "Australia" },
];


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Keep main container animation subtle
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center overflow-x-hidden" // Ensure no horizontal scroll from animations
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
            Explore the World with Chrysle Tours
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Discover amazing destinations, unforgettable experiences, and tailor-made travel plans designed just for you.
          </p>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/services"
            sx={{ fontWeight: 'bold', px: 6, py: 1.5 }}
          >
            View Our Services
          </Button>
        </motion.div>
      </section>

      {/* Intro Section - Why Choose Chrysle Tours? */}
      <section className="my-20 max-w-5xl bg-white text-gray-800 rounded-lg p-8 shadow-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Why Choose Chrysle Tours?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600">Expert Guides</h3>
            <p>
              Our experienced guides ensure you get the best insight and local knowledge on every trip.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600">Customized Trips</h3>
            <p>
              Every itinerary is tailored to your interests and preferences — no cookie-cutter tours here!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600">24/7 Support</h3>
            <p>
              We’re available anytime during your travels to help you with anything you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 bg-gray-100 w-full">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Unforgettable Sri Lankan Adventures Await
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                  <p className="text-gray-600 mb-4">{dest.description}</p>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={dest.link}
                    sx={{ borderColor: '#2563EB', color: '#2563EB', '&:hover': { backgroundColor: '#EBF4FF' } }}
                  >
                    Explore Tours
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Interest Tours Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Specialized Journeys for Every Passion
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialInterests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center"
              >
                <div className="text-5xl mb-4">{interest.icon}</div> {/* Replace with actual SVG/Image icons */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{interest.name}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-blue-700 text-white w-full">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-center mb-12"
          >
            Hear From Our Happy Travelers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white text-gray-800 rounded-lg p-6 shadow-xl"
              >
                <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-600">- {testimonial.name}, {testimonial.origin}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-extrabold mb-4">Your Sri Lankan Adventure Starts Here!</h2>
          <p className="text-xl mb-8">
            Ready to turn your travel dreams into reality? Contact us today for a personalized itinerary and expert advice.
          </p>
          <Button
            variant="contained"
            color="primary" // Assuming primary is a contrasting color in your MUI theme
            component={Link}
            to="/contact"
            size="large"
            sx={{ fontWeight: 'bold', px: 8, py: 2, fontSize: '1.25rem', backgroundColor: 'white', color: '#1E40AF', '&:hover': { backgroundColor: '#F3F4F6' } }}
          >
            Get a Free Quote
          </Button>
        </motion.div>
      </section>
    </motion.div>
  );
}