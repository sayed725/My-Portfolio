import React from 'react';
import { FaHome, FaPhoneAlt, FaEnvelope, FaWhatsappSquare  } from 'react-icons/fa';

const NavContact = () => {

    const handleSubmit =(e)=>{
        e.preventDefault()
    }


  return (
    <div id="contact" className="py-10 mt-10 px-4 lg:px-0 min-h-screen">
         <h2 className="text-5xl font-bold text-gray-900 mb-10 text-start">
          Contact Me<span className="text-purple-600">.</span>
        </h2>
      <div className=" flex flex-col md:flex-row gap-8 ">
        {/* Contact Info Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <FaHome className="text-purple-600 hover:text-purple-500 text-2xl" />
            <div>
              <p className="font-semibold">Dhaka, Bangladesh</p>
              <p>Nawabjong,Dhaka 1320</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-purple-600 hover:text-purple-500 text-2xl" />
            <div>
              <p className="font-semibold">01627142598</p>
              <p>Mon to Fri 9am to 8pm</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-purple-600 hover:text-purple-500 text-2xl" />
            <div>
              <p className="font-semibold">ssayed72533@gmail.com</p>
              <p>Send us me query anytime!</p>
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
        <form onClick={handleSubmit} className="flex-1 grid sm:grid-cols-2 gap-5">
          <div className='flex flex-col gap-10'>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Enter subject"
            className="p-3 border rounded-lg w-full"
          />
          </div>
          <div className='flex flex-col gap-10'>
          <textarea
            placeholder="Enter Message"
            className="p-3 border rounded-lg w-full h-[140px]"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            SEND MESSAGE
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavContact;
