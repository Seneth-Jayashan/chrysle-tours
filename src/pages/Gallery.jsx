import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import galleryBanner from '../assets/adventure-sri-lanka.jpg';
import sigiriyaView from '../assets/cultural/sigiriya-view.jpg';
import kandyTemple from '../assets/cultural/kandy-temple.jpg';
import galleFortStreets from '../assets/cultural/galle-fort.jpg';
import yalaLeopard from '../assets/wildlife/yala.jpg';
import udawalaweElephants from '../assets/wildlife-safari.jpg';
import mirissaWhale from '../assets/wildlife/beach.jpg';
import sinharajaForest from '../assets/wildlife/sinharaja.jpg';
import mirissaBeach from '../assets//beaches/beach1.jpg';
import unawatunaSunset from '../assets/wildlife/beach.jpg';
import bentotaWaterSports from '../assets/beaches/bentota.jpg';
import ellaNineArchBridge from '../assets/adventure/nine-arch.jpg';
import kitulgalaRafting from '../assets/adventure/kithulgala.jpg';

const logoColors = {
  purple: '#5A2A84',
  darkerPurple: '#3E1C5A',
  orange: '#F7941E',
  lighterOrange: '#FDBB2D',
};

const galleryImages = [
  { id: 1, src: sigiriyaView, alt: 'Panoramic view from Sigiriya Rock Fortress', category: 'Cultural' },
  { id: 2, src: kandyTemple, alt: 'Temple of the Tooth Relic in Kandy', category: 'Cultural' },
  { id: 3, src: galleFortStreets, alt: 'Charming streets inside Galle Fort', category: 'Cultural' },
  { id: 5, src: yalaLeopard, alt: 'Leopard resting on a tree in Yala National Park', category: 'Wildlife' },
  { id: 6, src: udawalaweElephants, alt: 'Herd of elephants near a lake in Udawalawe', category: 'Wildlife' },
  { id: 7, src: mirissaWhale, alt: 'Blue whale surfacing during whale watching in Mirissa', category: 'Wildlife' },
  { id: 8, src: sinharajaForest, alt: 'Lush greenery and waterfall in Sinharaja Rainforest', category: 'Wildlife' },
  { id: 9, src: mirissaBeach, alt: 'Tropical Mirissa beach with palm trees', category: 'Beaches' },
  { id: 10, src: unawatunaSunset, alt: 'Sunset over Unawatuna beach', category: 'Beaches' },
  { id: 11, src: bentotaWaterSports, alt: 'Water sports activities in Bentota lagoon', category: 'Beaches' },
  { id: 13, src: ellaNineArchBridge, alt: 'Iconic Nine Arch Bridge in Ella', category: 'Adventure' },
  { id: 16, src: kitulgalaRafting, alt: 'White water rafting in Kitulgala river', category: 'Adventure' },
];

const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === filter));
    }
  }, [filter]);

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50" 
    >
      <section className="relative h-96 md:h-72 w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[50%_25%] bg-no-repeat"
          style={{ backgroundImage: `url(${galleryBanner})` }}
          aria-label="Beautiful montage of Sri Lankan attractions"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Our Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">
            A Visual Journey Through the Wonders of Sri Lanka
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-8"
            style={{ color: logoColors.purple }} 
          >
            Immerse Yourself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Welcome to Chrysle Tours' visual diary! Here, every image tells a story of discovery, adventure, and tranquility in the heart of Sri Lanka. Let these moments inspire your next journey with us.
          </motion.p>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-purple text-white shadow-md' 
                  : 'bg-white text-brand-purple border border-brand-purple hover:bg-purple-50' 
              }`}
              style={{
                '--tw-shadow-color': logoColors.purple,
                '--tw-shadow': '0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)'
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredImages.map(image => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-base font-medium">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredImages.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 text-xl mt-10"
            >
              No images found for this category. Please try another filter!
            </motion.p>
          )}
        </div>
      </section>

      <section 
        className="py-24 text-center" 
        style={{ background: `linear-gradient(to right, ${logoColors.orange}, ${logoColors.lighterOrange})` }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Inspired by What You See?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white mb-10"
          >
            Let Chrysle Tours turn these stunning visuals into your real-life experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/services" 
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
              Explore Our Tour Packages
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}