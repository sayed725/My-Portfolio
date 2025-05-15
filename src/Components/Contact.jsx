import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaHome, FaPhoneAlt, FaEnvelope, FaWhatsappSquare } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

// Animation variants for the heading
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants for contact info items
const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

// Animation variants for form elements
const formElementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const ContactForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = `${import.meta.env.VITE_SERVICE_ID}`; 
    const templateID = `${import.meta.env.VITE_TEMPLATE_ID}`; 
    const publicKey = `${import.meta.env.VITE_PUBLIC_KEY}`;

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, publicKey)
      .then(() => {
        toast.success('Message sent successfully!');
        // Reset form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <Element name="contact">
      <div id="contact" className="py-5 lg:py-10 w-11/12 mx-auto lg:w-full">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-10"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Contact Me<span className="text-purple-600">.</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info Section */}
          <div className="flex flex-col gap-4">
            {[
              { icon: <FaHome className="text-purple-600 hover:text-purple-500 text-2xl" />, title: "Dhaka, Bangladesh", subtitle: "Nawabjong, Dhaka 1320" },
              { icon: <FaPhoneAlt className="text-purple-600 hover:text-purple-500 text-2xl" />, title: "+8801627142598", subtitle: "Sun to Thu 9am to 8pm" },
              { icon: <FaEnvelope className="text-purple-600 hover:text-purple-500 text-2xl" />, title: "abusayedkhan.pro@gmail.com", subtitle: "Send me query anytime!" },
              { icon: <FaWhatsappSquare className="text-purple-600 hover:text-purple-500 text-2xl" />, title: "+8801627142598", subtitle: "Available 24/7!" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {item.icon}
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="flex-1 grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-10">
              {[
                { type: "text", name: "name", placeholder: "Enter your name", value: formData.name },
                { type: "email", name: "email", placeholder: "Enter email address", value: formData.email },
                { type: "text", name: "subject", placeholder: "Enter subject", value: formData.subject },
              ].map((input, index) => (
                <motion.input
                  key={index}
                  type={input.type}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className="p-3 border rounded-lg w-full"
                  required
                  variants={formElementVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                />
              ))}
            </div>
            <div className="flex flex-col gap-10">
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="p-3 border rounded-lg w-full h-[140px]"
                required
                variants={formElementVariants}
                initial="hidden"
                animate="visible"
                custom={3}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="bg-purple-600 text-white btn rounded-md font-semibold hover:bg-purple-700"
                variants={formElementVariants}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                SEND MESSAGE
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default ContactForm;