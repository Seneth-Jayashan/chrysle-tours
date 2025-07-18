// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// // Import your gallery images.
// // Organize them by category for easier filtering.
// // REMEMBER TO REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS!
// import galleryBanner from '../assets/gallery/gallery-banner.jpg'; // A collage or stunning overview shot

// // Cultural & Heritage
// import sigiriyaView from '../assets/gallery/cultural/sigiriya-view.jpg';
// import kandyTemple from '../assets/gallery/cultural/kandy-temple.jpg';
// import galleFortStreets from '../assets/gallery/cultural/galle-fort-streets.jpg';
// import dambullaCaves from '../assets/gallery/cultural/dambulla-caves.jpg';

// // Wildlife & Nature
// import yalaLeopard from '../assets/gallery/wildlife/yala-leopard.jpg';
// import udawalaweElephants from '../assets/gallery/wildlife/udawalawe-elephants.jpg';
// import mirissaWhale from '../assets/gallery/wildlife/mirissa-whale.jpg';
// import sinharajaForest from '../assets/gallery/wildlife/sinharaja-forest.jpg';

// // Beaches & Relaxation
// import mirissaBeach from '../assets/gallery/beaches/mirissa-beach.jpg';
// import unawatunaSunset from '../assets/gallery/beaches/unawatuna-sunset.jpg';
// import bentotaWaterSports from '../assets/gallery/beaches/bentota-watersports.jpg';
// import nilaveliBeach from '../assets/gallery/beaches/nilaveli-beach.jpg';

// // Adventure & Outdoors
// import ellaNineArchBridge from '../assets/gallery/adventure/ella-nine-arch-bridge.jpg';
// import adamsPeak from '../assets/gallery/adventure/adams-peak.jpg';
// import aragumBaySurfing from '../assets/gallery/adventure/aragum-bay-surfing.jpg';
// import kitulgalaRafting from '../assets/gallery/adventure/kitulgala-rafting.jpg';

// // Define your gallery data with categories
// const galleryImages = [
//   // Cultural
//   { id: 1, src: sigiriyaView, alt: 'Panoramic view from Sigiriya Rock Fortress', category: 'Cultural' },
//   { id: 2, src: kandyTemple, alt: 'Temple of the Tooth Relic in Kandy', category: 'Cultural' },
//   { id: 3, src: galleFortStreets, alt: 'Charming streets inside Galle Fort', category: 'Cultural' },
//   { id: 4, src: dambullaCaves, alt: 'Ancient rock carvings in Dambulla Cave Temple', category: 'Cultural' },

//   // Wildlife
//   { id: 5, src: yalaLeopard, alt: 'Leopard resting on a tree in Yala National Park', category: 'Wildlife' },
//   { id: 6, src: udawalaweElephants, alt: 'Herd of elephants near a lake in Udawalawe', category: 'Wildlife' },
//   { id: 7, src: mirissaWhale, alt: 'Blue whale surfacing during whale watching in Mirissa', category: 'Wildlife' },
//   { id: 8, src: sinharajaForest, alt: 'Lush greenery and waterfall in Sinharaja Rainforest', category: 'Wildlife' },

//   // Beaches
//   { id: 9, src: mirissaBeach, alt: 'Tropical Mirissa beach with palm trees', category: 'Beaches' },
//   { id: 10, src: unawatunaSunset, alt: 'Sunset over Unawatuna beach', category: 'Beaches' },
//   { id: 11, src: bentotaWaterSports, alt: 'Water sports activities in Bentota lagoon', category: 'Beaches' },
//   { id: 12, src: nilaveliBeach, alt: 'Pristine Nilaveli beach near Trincomalee', category: 'Beaches' },

//   // Adventure
//   { id: 13, src: ellaNineArchBridge, alt: 'Iconic Nine Arch Bridge in Ella', category: 'Adventure' },
//   { id: 14, src: adamsPeak, alt: 'Sunrise view from Adams Peak', category: 'Adventure' },
//   { id: 15, src: aragumBaySurfing, alt: 'Surfers catching waves at Arugam Bay', category: 'Adventure' },
//   { id: 16, src: kitulgalaRafting, alt: 'White water rafting in Kitulgala river', category: 'Adventure' },

//   // Add more images as needed, ensure you specify category for each
// ];

// // Get unique categories for filter buttons
// const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

// export default function Gallery() {
//   const [filter, setFilter] = useState('All');
//   const [filteredImages, setFilteredImages] = useState([]);

//   useEffect(() => {
//     if (filter === 'All') {
//       setFilteredImages(galleryImages);
//     } else {
//       setFilteredImages(galleryImages.filter(img => img.category === filter));
//     }
//   }, [filter]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="min-h-screen pt-20 bg-gray-50" // pt-20 for fixed Navbar
//     >
//       {/* Hero/Banner Section */}
//       <section className="relative h-96 w-full flex items-center justify-center text-white overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${galleryBanner})` }}
//           aria-label="Beautiful montage of Sri Lankan attractions"
//         ></div>
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="relative z-10 text-center px-6"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//             Our Photo Gallery
//           </h1>
//           <p className="text-xl md:text-2xl font-light drop-shadow-md">
//             A Visual Journey Through the Wonders of Sri Lanka
//           </p>
//         </motion.div>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 bg-white text-gray-800">
//         <div className="container mx-auto px-6 max-w-4xl text-center">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5 }}
//             className="text-lg leading-relaxed mb-4"
//           >
//             Welcome to Chrysle Tours' visual diary! Here, every image tells a story of discovery, adventure, and tranquility in the heart of Sri Lanka.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-lg leading-relaxed"
//           >
//             Immerse yourself in breathtaking landscapes, vibrant culture, incredible wildlife, and stunning beaches. Let these moments inspire your next journey with us.
//           </motion.p>
//         </div>
//       </section>

//       {/* Category Filter Buttons */}
//       <section className="py-8 bg-blue-50">
//         <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
//           {categories.map(cat => (
//             <motion.button
//               key={cat}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
//                 filter === cat
//                   ? 'bg-blue-700 text-white shadow-md'
//                   : 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-100'
//               }`}
//             >
//               {cat}
//             </motion.button>
//           ))}
//         </div>
//       </section>

//       {/* Photo Grid */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             <AnimatePresence>
//               {filteredImages.map(image => (
//                 <motion.div
//                   key={image.id}
//                   layout // Enables smooth layout transitions for filtering
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                     <p className="text-white text-lg font-medium">{image.alt}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//           {filteredImages.length === 0 && (
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center text-gray-600 text-xl mt-10"
//             >
//               No images found for this category. Please try another filter!
//             </motion.p>
//           )}
//         </div>
//       </section>

//       {/* Final Call to Action */}
//       <section className="py-20 bg-blue-700 text-white text-center">
//         <div className="container mx-auto px-6 max-w-3xl">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl font-bold mb-6"
//           >
//             Inspired by What You See?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl mb-10"
//           >
//             Let Chrysle Tours turn these stunning visuals into your real-life experiences.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Button
//               variant="contained"
//               color="primary" // Or a contrasting color from your theme
//               component={Link}
//               to="/services"
//               size="large"
//               sx={{ fontWeight: 'bold', px: 8, py: 2, fontSize: '1.25rem', backgroundColor: 'white', color: '#1E40AF', '&:hover': { backgroundColor: '#F3F4F6' } }}
//             >
//               Explore Our Tour Packages
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }

import React from 'react'

export default function Gallery() {
  return (
    <div>
      
    </div>
  )
}
