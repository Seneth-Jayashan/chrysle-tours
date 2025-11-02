import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// --- Import NEW Icons for "How it Works" ---
import ChatIcon from '@mui/icons-material/Chat';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // For highlights

// --- Import Image Assets ---
import CulturalImage from '../assets/cultural-sri-lanka.jpg';
import WildlifeImage from '../assets/wildlife-safari.jpg';
import AdventureImage from '../assets/adventure-sri-lanka.jpg';
import BeachImage from '../assets/beach-relaxation.jpg';
import CustomTourImage from '../assets/custom-tour.jpg';

// --- Brand Colors ---
const logoColors = {
  purple: '#5A2A84',
  darkerPurple: '#3E1C5A',
  orange: '#F7941E',
  lighterOrange: '#FDBB2D',
};

// --- Service Categories (Unchanged) ---
const serviceCategories = [
  {
    id: 'cultural',
    name: 'Cultural & Heritage Tours',
    description: 'Delve into Sri Lanka\'s rich history and ancient civilizations. Explore UNESCO World Heritage Sites, majestic temples, and vibrant local traditions.',
    image: CulturalImage,
    highlights: ['Ancient Cities (Anuradhapura, Polonnaruwa)', 'Kandy & Temple of the Tooth', 'Galle Fort', 'Dambulla Cave Temple'],
  },
  {
    id: 'wildlife',
    name: 'Wildlife & Nature Safaris',
    description: 'Experience the incredible biodiversity of Sri Lanka. Spot leopards, elephants, exotic birds, and marine life in national parks and sanctuaries.',
    image: WildlifeImage,
    highlights: ['Yala National Park', 'Udawalawe Elephant Sanctuary', 'Mirissa Whale Watching', 'Sinharaja Rainforest'],
  },
  {
    id: 'adventure',
    name: 'Adventure & Outdoor Expeditions',
    description: 'For thrill-seekers and nature lovers, embark on exhilarating adventures from misty mountains to captivating coastlines.',
    image: AdventureImage,
    highlights: ['Hiking in Ella & Horton Plains', 'Surfing in Arugam Bay & Weligama', 'White Water Rafting (Kitulgala)', 'Cycling Trails'],
  },
  {
    id: 'beach',
    name: 'Beach & Relaxation Getaways',
    description: 'Unwind on Sri Lanka\'s pristine golden beaches. Enjoy sun-drenched shores, turquoise waters, and luxurious beachfront resorts.',
    image: BeachImage,
    highlights: ['Mirissa', 'Unawatuna', 'Bentota', 'Tangalle'],
  },
];

// --- NEW "How it Works" Data ---
const howItWorksSteps = [
  {
    step: "1",
    title: "Tell Us Your Dream",
    description: "Share your interests, travel dates, and budget via our simple inquiry form.",
    icon: <ChatIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />
  },
  {
    step: "2",
    title: "Receive Your Custom Plan",
    description: "Our experts will craft a personalized, no-obligation itinerary and quote just for you.",
    icon: <ChecklistIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />
  },
  {
    step: "3",
    title: "Embark on Your Journey",
    description: "Confirm your tour and get ready for an unforgettable Sri Lankan adventure!",
    icon: <FlightTakeoffIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />
  }
];


export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen" // Keep pt-20 to clear fixed navbar
    >
      {/* --- Hero Section --- */}
      <section className="relative h-96 md:h-72  w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CustomTourImage})` }}
          aria-label="Diverse travel experiences in Sri Lanka"
        ></div>
        {/* === UPDATED OVERLAY === */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Our Services: Tailored Sri Lankan Journeys
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">
            Discover the perfect tour for your unforgettable adventure.
          </p>
        </motion.div>
      </section>

      {/* --- Intro Text Section --- */}
      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-8"
            style={{ color: logoColors.purple }} // BRANDED
          >
            Your Gateway to Sri Lanka's Wonders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 leading-relaxed mb-8"
          >
            At Chrysle Tours, we believe every journey should be a unique story. We offer a wide range of meticulously crafted tour packages, designed to showcase the best of Sri Lanka, catering to every interest and travel style. From ancient heritage sites to thrilling wildlife encounters and pristine beaches, your adventure starts here.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Browse our popular categories below, or let us create a custom itinerary just for you!
          </motion.p>
        </div>
      </section>

      {/* --- NEW UI: Tour Categories --- */}
      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
            style={{ color: logoColors.purple }} // BRANDED
          >
            Explore Our Popular Tour Categories
          </motion.h2>

          {/* === NEW Interactive Grid Layout === */}
          <div className="grid md:grid-cols-2 gap-10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="w-full h-96 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                {/* Overlay Content */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent 
                             flex flex-col justify-end p-8 text-white opacity-0 group-hover:opacity-100 
                             transition-opacity duration-500 ease-in-out"
                >
                  <h3 className="text-3xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    {category.name}
                  </h3>
                  <p className="text-lg mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-100">
                    {category.description}
                  </p>
                  
                  {/* Highlights List */}
                  <div className="mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-200">
                    <h4 className="font-semibold text-brand-orange-light mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {category.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center text-sm">
                          <CheckCircleIcon sx={{ fontSize: 16, mr: 1, color: logoColors.orange }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-brand-orange text-white py-2 px-6 rounded-full font-semibold translate-y-4 group-hover:translate-y-0 
                                 transition-all duration-500 ease-in-out delay-300"
                    >
                      Inquire Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Custom Tour CTA Section --- */}
      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-8"
            style={{ color: logoColors.purple }} // BRANDED
          >
            Your Dream Tour, Crafted Just For You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 leading-relaxed mb-10"
          >
            Can't find exactly what you're looking for? No problem! At Chrysle Tours, our specialty is creating personalized itineraries that perfectly match your interests, budget, and travel style. Whether you're planning a romantic honeymoon, a family adventure, a spiritual retreat, or a solo exploration, we're here to make it happen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              size="large"
              // BRANDED
              sx={{ 
                fontWeight: 'bold', px: 8, py: 2, fontSize: '1.25rem',
                backgroundColor: logoColors.orange,
                '&:hover': {
                  backgroundColor: logoColors.lighterOrange
                }
              }}
            >
              Plan Your Custom Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- NEW UI: "How Booking Works" Section --- */}
      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{ color: logoColors.purple }} // BRANDED
          >
            How Booking Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {howItWorksSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                className="p-8 bg-white rounded-lg shadow-xl flex flex-col items-center" // BRANDED
              >
                <div className="mb-4">{step.icon}</div>
                <div 
                  className="text-7xl font-extrabold mb-4" 
                  style={{ color: logoColors.orange }} // BRANDED
                >
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: logoColors.purple }}>{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRANDED: "Final CTA" Section --- */}
      <section 
        className="py-24 text-center"
        style={{ background: `linear-gradient(to right, ${logoColors.orange}, ${logoColors.lighterOrange})` }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Ready to Plan Your Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white mb-10"
          >
            Contact us today for a free, no-obligation tour quote. Let's make your Sri Lankan dream a reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              size="large"
              sx={{ 
                fontWeight: 'bold', 
                px: 8, py: 2, 
                fontSize: '1.25rem',
                backgroundColor: 'white',
                color: logoColors.purple,
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  color: logoColors.darkerPurple
                }
              }}
            >
              Get Your Free Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}