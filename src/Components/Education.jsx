import React from "react";
import { motion } from "framer-motion";

// Animation variants for the heading
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants for education cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const educationData = [
  {
    id: 1,
    institution: "University Of Dhaka",
    certificate: "Certificate Of MBA",
    role: "Graduated",
    duration: "Jan 2021-Dec 2022",
    description: `
    Completed Master of Business Administration(MBA) from Kabi Najrul Govt College (Under Dhaka University) "An advanced degree focusing on leadership, strategy, and business operations in a global context."
    `,
  },
  {
    id: 2,
    institution: "University Of Dhaka",
    certificate: "Certificate Of BBA",
    role: "Graduated",
    duration: "Jan 2017-Dec 2021",
    description: `
     Completed Bachelor of Business Administration(BBA) from Kabi Najrul Govt College (Under Dhaka University) "A comprehensive program covering key areas of business, such as management, marketing, and finance."
    `,
  },
];

const Education = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-10"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Education<span className="text-purple-600">.</span>
        </motion.h2>

        {/* Education Cards */}
        <div className="bg-white shadow rounded-lg">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`p-6 border-b border-gray-200 shadow hover:shadow-purple-500`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="flex flex-col sm:flex-row gap-8 justify-between">
                <div className="text-start sm:w-1/2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.institution}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-4">
                    <p className="text-gray-600">{edu.role}</p>
                    <span className="bg-purple-500 text-white px-3 lg:px-3 py-1 rounded-full text-center sm:text-start text-sm inline-block">
                      {edu.duration}
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-semibold">{edu.certificate}</p>
                  <p className="mt-2 text-gray-600">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;