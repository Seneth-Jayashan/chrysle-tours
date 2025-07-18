import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AboutUsBanner from '../assets/about-us-banner.jpg';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${AboutUsBanner})` }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
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

      {/* Our Story Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-700 mb-10"
          >
            Our Story: Driven by Passion, Rooted in Sri Lanka
          </motion.h2>
          <div className="text-lg leading-relaxed space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Chrysle Tours was founded in 2012 by a team of travel lovers and Sri Lankan natives passionate about showcasing the island’s unmatched beauty. Our journey began with a mission to create immersive, unforgettable travel experiences for explorers around the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Today, we’re proud to be recognized as one of Sri Lanka’s most trusted tour operators, offering tailor-made itineraries, guided cultural experiences, and seamless logistics. Whether you're seeking adventure, heritage, or relaxation, Chrysle Tours curates journeys that speak to your soul.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our team of expert guides and local hosts are not just professionals — they are ambassadors of Sri Lanka’s warmth, hospitality, and vibrant traditions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-700 mb-10"
          >
            Our Purpose
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-lg">
                To offer world-class travel experiences across Sri Lanka, combining personalized service, sustainable practices, and heartfelt hospitality for every guest.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-lg">
                To be Sri Lanka’s most respected and innovative travel company, known for inspiring global travelers while uplifting local communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Why Travel with Chrysle Tours?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Custom-Made Itineraries",
                description: "Each tour is designed around your interests — from beaches to tea plantations and sacred cities.",
                icon: "📍",
              },
              {
                title: "Expert Local Guides",
                description: "Our guides are born storytellers, blending facts with folklore to bring every site to life.",
                icon: "🗺️",
              },
              {
                title: "Premium Service",
                description: "We handle every detail from airport pickup to farewell, so you can relax and enjoy the journey.",
                icon: "🌟",
              },
              {
                title: "24/7 Travel Support",
                description: "Our local support team is always just a call or message away, no matter where you are.",
                icon: "📞",
              },
              {
                title: "Eco-Friendly Tours",
                description: "We partner with sustainable hotels and promote responsible tourism to protect Sri Lanka’s heritage.",
                icon: "🌱",
              },
              {
                title: "Community-Centered",
                description: "Our trips directly support local artisans, businesses, and rural families across the island.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-md"
              >
                <div className="text-5xl text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-blue-700 text-white">
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
            className="text-lg mb-8"
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
              color="secondary"
              component={Link}
              to="/contact"
              size="large"
              sx={{ fontWeight: 'bold', px: 6, py: 1.5, backgroundColor: 'white', color: '#1E40AF' }}
            >
              Learn More About Our Values
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-50 text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-700 mb-8"
          >
            Ready to Discover Sri Lanka?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-8"
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
              color="primary"
              component={Link}
              to="/contact"
              size="large"
              sx={{ fontWeight: 'bold', px: 8, py: 2, fontSize: '1.25rem' }}
            >
              Contact Our Travel Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
