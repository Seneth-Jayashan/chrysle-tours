import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MapIcon from '@mui/icons-material/Map';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarIcon from '@mui/icons-material/Star';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ParkIcon from '@mui/icons-material/Park'; 
import HandshakeIcon from '@mui/icons-material/Handshake';

const logoColors = {
  purple: '#5A2A84',
  darkerPurple: '#3E1C5A',
  orange: '#F7941E',
  lighterOrange: '#FDBB2D',
};

import AboutUsBanner from '../assets/about-us-banner.jpg'; 
import StoryImage from '../assets/story-image.jpg'; 

const whyChooseUsItems = [
  {
    title: "Custom-Made Itineraries",
    description: "Each tour is designed around your interests — from beaches to tea plantations and sacred cities.",
    icon: <MapIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />,
  },
  {
    title: "Expert Local Guides",
    description: "Our guides are born storytellers, blending facts with folklore to bring every site to life.",
    icon: <EmojiPeopleIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />,
  },
  {
    title: "Premium Service",
    description: "We handle every detail from airport pickup to farewell, so you can relax and enjoy the journey.",
    icon: <StarIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />,
  },
  {
    title: "24/7 Travel Support",
    description: "Our local support team is always just a call or message away, no matter where you are.",
    icon: <SupportAgentIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />,
  },
  {
    title: "Eco-Friendly Tours",
    description: "We partner with sustainable hotels and promote responsible tourism to protect Sri Lanka’s heritage.",
    icon: <ParkIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />,
  },
  {
    title: "Community-Centered",
    description: "Our trips directly support local artisans, businesses, and rural families across the island.",
    icon: <HandshakeIcon sx={{ fontSize: '3rem', color: logoColors.purple }} />,
  },
];


export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen" 
    >
      <section className="relative h-96 md:h-72 w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[50%_85%] bg-no-repeat"
          style={{ backgroundImage: `url(${AboutUsBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/90 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About Chrysle Tours
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">
            Crafting Unforgettable Journeys Across Sri Lanka
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 
              className="text-4xl md:text-5xl font-extrabold mb-8"
              style={{ color: logoColors.purple }}
            >
              Our Story: Driven by Passion
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Chrysle Tours was founded in 2012 by a team of travel lovers and Sri Lankan natives passionate about showcasing the island’s unmatched beauty. Our journey began with a mission to create immersive, unforgettable travel experiences for explorers around the world.
              </p>
              <p>
                Today, we’re proud to be recognized as one of Sri Lanka’s most trusted tour operators, offering tailor-made itineraries, guided cultural experiences, and seamless logistics.
              </p>
              <p>
                Our team of expert guides and local hosts are not just professionals — they are ambassadors of Sri Lanka’s warmth, hospitality, and vibrant traditions.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full h-96 md:h-[500px] rounded-lg shadow-xl overflow-hidden"
          >
            <img 
              src={StoryImage} 
              alt="Sri Lankan Culture" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
            style={{ color: logoColors.purple }}
          >
            Our Purpose
          </motion.h2>
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <RocketLaunchIcon sx={{ fontSize: '3.5rem', color: logoColors.purple, mt: 1 }} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: logoColors.purple }}>Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To offer world-class travel experiences across Sri Lanka, combining personalized service, sustainable practices, and heartfelt hospitality for every guest.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <VisibilityIcon sx={{ fontSize: '3.5rem', color: logoColors.purple, mt: 1 }} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: logoColors.purple }}>Our Vision</h3>
                <p className="text-lg text-gray-700">
                  To be Sri Lanka’s most respected and innovative travel company, known for inspiring global travelers while uplifting local communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
            style={{ color: logoColors.purple }}
          >
            Why Travel with Chrysle Tours?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: logoColors.purple }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-24 text-white"
        style={{ background: `linear-gradient(to top, ${logoColors.darkerPurple}, ${logoColors.purple})` }}
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            Our Commitment to Sustainable Tourism
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-200 mb-10"
          >
            We believe travel should be a force for good. Chrysle Tours actively supports eco-tourism, reduces plastic waste, partners with local vendors, and engages in wildlife protection initiatives throughout Sri Lanka.
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
                fontWeight: 'bold', px: 6, py: 1.5, 
                backgroundColor: 'white', 
                color: logoColors.purple,
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  color: logoColors.darkerPurple
                }
              }}
            >
              Learn More About Our Values
            </Button>
          </motion.div>
        </div>
      </section>

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
            Ready to Discover Sri Lanka?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white mb-10"
          >
            Let’s start planning your dream adventure — customized, immersive, and 100% Chrysle.
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
              Contact Our Travel Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}