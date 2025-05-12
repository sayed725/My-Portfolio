import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaHome, FaPhoneAlt, FaEnvelope, FaWhatsappSquare } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';

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
     <div id="contact" className=" py-5 lg:py-10 w-11/12 mx-auto lg:w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-10">
        Contact Me<span className="text-purple-600">.</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <FaHome className="text-purple-600 hover:text-purple-500 text-2xl" />
            <div>
              <p className="font-semibold">Dhaka, Bangladesh</p>
              <p>Nawabjong, Dhaka 1320</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-purple-600 hover:text-purple-500 text-2xl" />
            <div>
              <p className="font-semibold">+8801627142598</p>
              <p>Sun to Thus 9am to 8pm</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-purple-600 hover:text-purple-500 text-2xl" />
            <div>
              <p className="font-semibold">abusayedkhan.pro@gmail.com</p>
              <p>Send me query anytime!</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaWhatsappSquare className="text-purple-600 hover:text-purple-500 text-2xl" />
            <div>
              <p className="font-semibold">+8801627142598</p>
              <p>Available 24/7!</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex-1 grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-10">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 border rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="p-3 border rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="p-3 border rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-10">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Message"
              className="p-3 border rounded-lg w-full h-[140px]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white btn btn-sm sm:btn-md rounded-lg font-semibold hover:bg-purple-700"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
   </Element>
  );
};

export default ContactForm;