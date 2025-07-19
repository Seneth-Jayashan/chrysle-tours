import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CulturalImage from '../assets/cultural-sri-lanka.jpg';
import WildlifeImage from '../assets/wildlife-safari.jpg';
import AdventureImage from '../assets/adventure-sri-lanka.jpg';
import BeachImage from '../assets/beach-relaxation.jpg';
import CustomTourImage from '../assets/custom-tour.jpg';

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

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 bg-gray-50"
    >
      <section className="relative h-96 w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CustomTourImage})` }}
          aria-label="Diverse travel experiences in Sri Lanka"
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
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

      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-700 mb-8"
          >
            Your Gateway to Sri Lanka's Wonders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed mb-8"
          >
            At Chrysle Tours, we believe every journey should be a unique story. We offer a wide range of meticulously crafted tour packages, designed to showcase the best of Sri Lanka, catering to every interest and travel style. From ancient heritage sites to thrilling wildlife encounters and pristine beaches, your adventure starts here.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg leading-relaxed"
          >
            Browse our popular categories below, or let us create a custom itinerary just for you!
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Explore Our Popular Tour Categories
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="md:w-1/2 flex-shrink-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-blue-600 mb-2">Highlights:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        {category.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-700 mb-8"
          >
            Your Dream Tour, Crafted Just For You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed mb-8"
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
              color="secondary"
              component={Link}
              to="/contact"
              size="large"
              sx={{ fontWeight: 'bold', px: 8, py: 2, fontSize: '1.25rem' }}
            >
              Plan Your Custom Tour
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Why Choose Chrysle Tours for Your Sri Lanka Adventure?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Expert Local Knowledge",
                description: "Our team lives and breathes Sri Lanka, offering unparalleled insights and authentic experiences.",
                icon: "💡"
              },
              {
                title: "Hassle-Free Planning",
                description: "We handle all logistics: accommodations, transport, activities, ensuring a smooth journey.",
                icon: "🗓️"
              },
              {
                title: "Quality Accommodations",
                description: "Stay in hand-picked hotels and resorts that match your style and comfort preferences.",
                icon: "🏨"
              },
              {
                title: "Safe & Reliable Transport",
                description: "Travel comfortably and securely with our modern fleet and experienced drivers.",
                icon: "🚗"
              },
              {
                title: "Dedicated Support",
                description: "24/7 assistance throughout your trip, giving you peace of mind.",
                icon: "📞"
              },
              {
                title: "Competitive Pricing",
                description: "Exceptional value without compromising on quality or experience.",
                icon: "💲"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-5xl text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            How Booking with Us Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {["Tell Us Your Dream", "Receive Your Custom Plan", "Embark on Your Journey!"].map((title, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                className="p-6 bg-blue-600 rounded-lg shadow-xl"
              >
                <div className="text-6xl mb-4">{idx + 1}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm opacity-90">
                  {[
                    "Share your interests, dates, and budget via our inquiry form.",
                    "Our experts will craft a personalized itinerary and quote for you.",
                    "Confirm your tour and get ready for an unforgettable Sri Lankan adventure."
                  ][idx]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-700 mb-8"
          >
            Ready to Plan Your Sri Lankan Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-8"
          >
            Whether you choose one of our curated packages or a tailor-made journey, Chrysle Tours is here to make your travel dreams a reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/contact"
              size="large"
              sx={{ fontWeight: 'bold', px: 8, py: 2, fontSize: '1.25rem' }}
            >
              Get Your Free Tour Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
