import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, TextField, TextareaAutosize } from '@mui/material'; // Using MUI components for form inputs
import { Link } from 'react-router-dom';

// Import a relevant image for the contact banner
import contactBannerImage from '../assets/traveller.jpg'; // Example: A friendly team photo, a Sri Lankan landscape with communication elements, or a local welcoming scene.

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend or an email service.
    // For now, let's just log it and show an alert.
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 bg-gray-50" // pt-20 for fixed Navbar
    >
      {/* Hero/Banner Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBannerImage})` }}
          aria-label="Connect with Chrysle Tours"
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Contact Chrysle Tours
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">
            Let's plan your unforgettable Sri Lankan journey together.
          </p>
        </motion.div>
      </section>

      {/* Introduction & Contact Info */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Get In Touch With Our Travel Experts
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-blue-800 mb-6">Reach Out Directly</h3>
              <div className="space-y-6 text-lg">
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">📞</span>
                  <strong>Phone:</strong> <a href="tel:+94771234567" className="ml-2 text-gray-700 hover:text-blue-600 transition">+94 77 123 4567</a> (Sri Lanka)
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">📧</span>
                  <strong>Email:</strong> <a href="mailto:info@chrysletours.com" className="ml-2 text-gray-700 hover:text-blue-600 transition">info@chrysletours.com</a>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">📍</span>
                  <strong>Address:</strong> <span className="ml-2">123, Galle Road, Colombo 03, Sri Lanka</span>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">⏰</span>
                  <strong>Working Hours:</strong> <span className="ml-2">Monday - Friday: 9:00 AM - 5:00 PM (LKT)</span>
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/chrysletours" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors text-4xl">
                  {/* Replace with actual SVG icons or Font Awesome */}
                  <i className="fab fa-facebook-square"></i> {/* Placeholder for Facebook icon */}
                  <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="https://instagram.com/chrysletours" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors text-4xl">
                  {/* Placeholder for Instagram icon */}
                  <img src="https://img.icons8.com/ios-filled/50/instagram-new.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="https://twitter.com/chrysletours" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors text-4xl">
                  {/* Placeholder for Twitter/X icon */}
                  <img src="https://img.icons8.com/ios-filled/50/twitterx.png" alt="Twitter/X" className="w-8 h-8" />
                </a>
                {/* Add more social media links as needed */}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-3xl font-semibold text-blue-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextareaAutosize
                  minRows={5}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ fontWeight: 'bold', px: 6, py: 1.5 }}
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map (Google Maps Embed Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-700 mb-10"
          >
            Find Our Office
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="w-full h-96 bg-gray-300 rounded-lg shadow-xl overflow-hidden"
          >
            {/* Replace this iframe with your actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.947265551747!2d79.85966671477286!3d6.899661495034633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597793d5f99f%3A0xc3c5d6e2e0e0a5c4!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1701792000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chrysle Tours Office Location on Google Maps"
            ></iframe>
            {/* The above iframe is a placeholder. Get the real embed code from Google Maps for your specific address. */}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-600 mt-6 text-lg"
          >
            Come visit us during our working hours for a face-to-face discussion about your travel plans!
          </motion.p>
        </div>
      </section>

      {/* Final Call to Action - What are you waiting for? */}
      <section className="py-20 bg-blue-800 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-10"
          >
            Don't hesitate to reach out! Our friendly team is eager to assist you in planning your dream Sri Lankan adventure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="contained"
              color="secondary" // Use your secondary color here
              component={Link}
              to="/services" // Or consider linking to a "Plan Your Trip" page if you have one
              size="large"
              sx={{ fontWeight: 'bold', px: 8, py: 2, fontSize: '1.25rem', backgroundColor: 'white', color: '#1E40AF', '&:hover': { backgroundColor: '#F3F4F6' } }}
            >
              View Our Services
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}