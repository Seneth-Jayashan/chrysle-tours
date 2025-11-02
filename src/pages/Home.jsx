import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import MapIcon from '@mui/icons-material/Map';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


// --- Hero Videos (Unchanged) ---
import HeroVideo1 from '../assets/videos/hero-video-1.mp4';
import HeroVideo2 from '../assets/videos/hero-video-2.mp4';
import HeroVideo3 from '../assets/videos/hero-video-3.mp4';
import WhyVideo from '../assets/videos/why-us-video.mp4'; 

// Video - Downloadable Links
// https://www.pexels.com/download/video/32718989/
// https://www.pexels.com/download/video/32504536/
// https://www.pexels.com/download/video/13234027/
// https://www.pexels.com/download/video/33220127/
// https://www.pexels.com/download/video/29330747/


const heroVideos = [HeroVideo1, HeroVideo2, HeroVideo3];

// --- Color Palette (Unchanged) ---
const logoColors = {
  purple: '#5A2A84',
  orange: '#F7941E',
  green: '#3FA449',
  blue: '#00AEEF',
  darkerPurple: '#3E1C5A',
  lighterOrange: '#FDBB2D',
};

// --- Destinations (Unchanged) ---
const featuredDestinations = [
  { 
    name: 'Sigiriya', 
    description: 'Climb the iconic Lion Rock fortress and witness breathtaking ancient frescoes and panoramic views.', 
    image: 'https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg', 
    link: '/services#sigiriya' 
  },
  { 
    name: 'Kandy', 
    description: 'Explore the cultural capital, home to the sacred Temple of the Tooth Relic and lush botanical gardens.', 
    image: 'https://images.pexels.com/photos/322437/pexels-photo-322437.jpeg', 
    link: '/services#kandy' 
  },
  { 
    name: 'Yala National Park', 
    description: 'Embark on an thrilling safari to spot elusive leopards, majestic elephants, and diverse wildlife.', 
    image: 'https://images.pexels.com/photos/33130315/pexels-photo-33130315.jpeg', 
    link: '/services#yala' 
  },
  { 
    name: 'Galle Fort', 
    description: 'Wander through the UNESCO World Heritage Site, a charming colonial fort with Dutch architecture.', 
    image: 'https://images.pexels.com/photos/27669335/pexels-photo-27669335.jpeg', 
    link: '/services#galle' 
  },
  {
    name: 'Mirissa',
    description: 'Famous for its stunning beaches, whale watching tours, and vibrant nightlife.',
    image: 'https://images.pexels.com/photos/7953000/pexels-photo-7953000.jpeg',
    link: '/services#mirissa'
  },
  {
    name: 'Ella',
    description: 'Hike to the top of Ella Rock, see the Nine Arch Bridge, and enjoy the cool mountain air.',
    image: 'https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg',
    link: '/services#ella'
  }
];

// --- Special Interests (Unchanged) ---
const specialInterests = [
  { name: 'Wildlife Safaris', description: 'Encounter leopards, elephants, and exotic birds in their natural habitats.', icon: '🐾' }, 
  { name: 'Cultural & Heritage Trails', description: 'Step back in time through ancient cities and sacred temples.', icon: '🏛️' },
  { name: 'Adventure & Outdoors', description: 'Hike majestic mountains, surf pristine beaches, or raft exhilarating rivers.', icon: '⛰️' },
  { name: 'Beach & Relaxation', description: 'Unwind on golden sands, swim in turquoise waters.', icon: '🏖️' },
  { name: 'Culinary & Tea Experiences', description: 'Savor authentic Sri Lankan flavors and explore lush tea plantations.', icon: '☕' },
  { name: 'Eco-Tourism & Sustainable Travel', description: 'Travel responsibly and connect deeply with nature and local communities.', icon: '🌿' },
];

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // --- Hero Slider Logic (Unchanged) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + heroVideos.length) % heroVideos.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center overflow-x-hidden" 
    >
      {/* --- Hero Section with Video SLIDER (Unchanged) --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.video 
            key={currentVideoIndex}
            src={heroVideos[currentVideoIndex]} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black opacity-60" /> 
        <button 
          onClick={goToPrevVideo} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-3 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
        >
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <button 
          onClick={goToNextVideo} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-3 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
        >
          <ArrowForwardIosIcon fontSize="large" />
        </button>
        <motion.div
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
            Your Unforgettable Journey
            <br /> 
            <span style={{ color: logoColors.orange }} className='text-4xl md:text-5xl'>with Chrysle Tours</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl">
            Discover the wonders of Sri Lanka, from pristine beaches to ancient temples. We craft your perfect adventure.
          </p>
          <Button
            variant="contained"
            size="large"
            component={Link} 
            to="/services"
            sx={{ 
              fontWeight: 'bold', px: 6, py: 1.5, fontSize: '1.1rem',
              backgroundColor: logoColors.orange, color: '#ffffff',
              '&:hover': { backgroundColor: logoColors.lighterOrange } 
            }} 
          >
            Start Your Adventure
          </Button>
        </motion.div>
      </section>

      {/* --- "Why Choose Us" Section (Unchanged Layout) --- */}
      <section className="py-24 w-full bg-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Video Column (Unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="w-full h-[500px] rounded-lg shadow-xl overflow-hidden"
          >
            <video 
              src={WhyVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
          </motion.div>

          {/* === UPDATED Content Column === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: logoColors.purple }}>
              Why Choose Chrysle Tours?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              We're not just a travel agency; we're your personal guides to the authentic heart of Sri Lanka.
            </p>

            {/* NEW Icon List Layout */}
            <div className="space-y-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <EmojiPeopleIcon 
                    sx={{ 
                      fontSize: '3rem', // Larger icon
                      color: logoColors.purple 
                    }} 
                  />
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: logoColors.purple }}>
                    Expert Local Guides
                  </h3>
                  <p className="text-gray-700">
                    Our experienced guides ensure you get the best insight and local knowledge on every trip.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <MapIcon 
                    sx={{ 
                      fontSize: '3rem',
                      color: logoColors.purple 
                    }} 
                  />
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: logoColors.purple }}>
                    Fully Customized Trips
                  </h3>
                  <p className="text-gray-700">
                    Every itinerary is tailored to your interests and preferences — no cookie-cutter tours!
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <SupportAgentIcon 
                    sx={{ 
                      fontSize: '3rem',
                      color: logoColors.purple 
                    }} 
                  />
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: logoColors.purple }}>
                    24/7 On-Trip Support
                  </h3>
                  <p className="text-gray-700">
                    We’re available anytime during your travels to help you with anything you need.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Button (Unchanged) */}
            <Button
              variant="outlined"
              size="large"
              component={Link} 
              to="/about"
              sx={{ 
                fontWeight: 'bold', px: 5, py: 1,
                borderColor: logoColors.purple,
                color: logoColors.purple,
                '&:hover': { 
                  backgroundColor: 'rgba(90, 42, 132, 0.04)',
                  borderColor: logoColors.darkerPurple,
                  color: logoColors.darkerPurple
                } 
              }} 
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- IMPROVED UI: "Featured Destinations" (Interactive Overlay Grid) --- */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ color: logoColors.purple }}>
              Explore Our Island Treasures
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We've hand-picked the most iconic destinations and hidden gems for your perfect itinerary.
            </p>
          </motion.div>
          
          {/* Interactive Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer" // Added group for hover effects
              >
                {/* Image */}
                <div className="w-full h-72 overflow-hidden"> {/* Increased height for impact */}
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                {/* Overlay Content */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                            flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 ease-in-out"
                >
                  <h3 className="text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    {dest.name}
                  </h3>
                  <p className="text-lg mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-100">
                    {dest.description}
                  </p>
                  <Link to={dest.link} className="block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-brand-orange text-white py-2 px-6 rounded-full font-semibold translate-y-4 group-hover:translate-y-0 
                                transition-all duration-500 ease-in-out delay-200"
                    >
                      Discover
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button to see more services (Unchanged) */}
          <div className="text-center mt-16">
              <Button
                variant="contained"
                size="large"
                component={Link} 
                to="/services"
                sx={{ 
                  fontWeight: 'bold', 
                  px: 6, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  backgroundColor: logoColors.orange,
                  color: '#ffffff',
                  '&:hover': { 
                    backgroundColor: logoColors.lighterOrange 
                  } 
                }} 
              >
                View All Destinations
              </Button>
          </div>
        </div>
      </section>

      {/* --- "Specialized Journeys" (Unchanged Grid) --- */}
      <section className="py-24 w-full bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ color: logoColors.purple }}>
              Journeys for Every Passion
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Whether you're an adventurer, a foodie, or a history buff, we have the perfect trip for you.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialInterests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="bg-white rounded-lg shadow-md p-8 text-center flex flex-col items-center hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-5">{interest.icon}</div> 
                <h3 className="text-2xl font-bold mb-3" style={{ color: logoColors.purple }}>{interest.name}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA (Unchanged) --- */}
      <section className="w-full">
        <div 
          className="m-5 p-12 md:p-16 rounded-lg text-white"
          style={{ background: `linear-gradient(to right, ${logoColors.orange}, ${logoColors.lighterOrange})` }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Plan Your Perfect Trip?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our travel experts today for a free consultation and a personalized itinerary.
            </p>
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
                  backgroundColor: '#F3F4F6',
                  color: logoColors.darkerPurple 
                } 
              }}
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}