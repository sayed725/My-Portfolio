import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: "Care Matrix (Team Project)",
      homeImage: "/CareMatrix Home.png",
      title:
        "A multi-role complete hospital management system for doctors, pharmacists, receptionist, administrators and patients.",
      description:
        " Care Matrix Backend powers the Care Matrix hospital management system, a robust platform designed to digitize and streamline hospital operations, enhance patient care, and improve operational efficiency. This backend provides secure APIs for managing medical records, real-time communication, billing, inventory, and more, ensuring seamless coordination among medical professionals, administrators, receptionists, pharmacists, and patients.",
      techStack: [
        "React",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "ShadCN Ui",
        "Stripe",
        "Axios",
        "Tanstack Query",
        "Toastify",
        "Sooner",
        "JWT",
        "FireBase",
        "Node.Js",
        "Express.Js",
        "MongoDB",
      ],
      images: [
        { src: "/CareMatrix Home.png", alt: "Project" },
        { src: "/careMatrix available bed.png", alt: "Project" },
        { src: "/careMtrix About us.png", alt: "Project" },
        { src: "/careMtrix appointment bokking.png", alt: "Project" },
        { src: "/careMtrix doctor overview.png", alt: "Project" },
        { src: "/careMatrix  revenue.png", alt: "Project" },
        { src: "/CareMatrix add bed.png", alt: "Project" },
        { src: "/careMatrix buy medicine.png", alt: "Project" },
        { src: "/carematrix recept Overview.png", alt: "Project" },
        { src: "/careMtrix payment record.png", alt: "Project" },
      ],
      links: {
        livePreview: "https://care-matrix.web.app/",
        github:
          "https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync/tree/sayed-hub",
        github1:
          "https://github.com/ssmahim01/Care-Matrix-Backend/tree/sayed-hub",
      },
      keyFeatures: [
        "Medical Records Management: Securely stores and retrieves patient data, prescriptions, and medical history.",
        "Real-Time Chat: Manages real-time communication between users (patients, doctors, pharmacists) with message storage and retrieval.",
        "Billing & Payment Processing: Integrates with Stripe to handle online payments and updates billing statuses.",
        "Real-Time Bed Availability: Tracks and updates hospital bed occupancy in real-time for efficient allocation.",
        "Pharmacy & Inventory Management: Manages medicine stock, tracks inventory levels, and sends restocking alerts.",
        "Emergency Services Coordination: Handles emergency contact retrieval, ambulance booking, and urgent care scheduling.",
        "Doctors Management: Provides endpoints for managing doctors’ schedules and availability.",
        "Patient Health Rewards System: Tracks patient activities (check-ups, medication adherence) and manages rewards.",
        "Medicine Cart & Checkout: Manages cart operations, calculates costs, and processes medicine purchases.",
        "Purchase History Tracking: Stores and retrieves purchase history for patients, including invoice generation.",
      ],
      myContributions: [
        "Logo: Created a beautiful logo and favicon for CareMatrix",
        "About Us: Designed a Beautiful About Us section on Home Page",
        "More About Us: Designed 2 beautiful section on clicking more about us button.",
        "Our Hight Quality Service: Design a Beautiful our service section with a simple looking hover effect.",
        "Blog & News: Designed a beautiful blog section showcasing dynamic blog data clicking read more you can read more about blog.",
        "Blog Details Page: In this section users can see the details of specific blogs he clicks.",
        "Our Available Beds: This section offers a user-friendly interface to book hospital rooms, displaying five room types with images, tariffs, and booking buttons, using Redux for data management.A pop-up form collects patient details, ensuring transparent pricing and a simplified booking process.",
        "Receptionist Dashboard: It provides hospital receptionists with a comprehensive overview of appointments and bed bookings, featuring summary cards, pie charts, and detailed tables for key metrics, updated in real-time via API. Its clean, grid-based layout with a gray background ensures clarity and efficient management of hospital operations.",
        "Manage Beds (Receptionist Dashboard): This section of the Receptionist Dashboard offers a clear interface to view and manage hospital bed listings, displaying images, titles, prices, and availability in a tabular format. It includes toggle switches for activating/deactivating beds, an action menu for edits or deletions, and an “Add New Bed” button for quick system updates.",
        "Manage Bed Booking Requests(Receptionist Dashboard): This section allows administrators to review bed booking details, including bed type, price, patient info, and status, with visual pending indicators. The “Actions” menu enables quick acceptance or deletion, with timestamps aiding real-time workflow management.",
        "Manage My Bed Booking Requests (Patient Dashboard):This section enables patients to view bed type, price, details, admission date, and status, with a yellow dot for pending requests. The 'Action' column offers a delete option, with timestamps (e.g., 'an hour ago') for efficient request tracking.",
        "Billing & Payments (Administration Dashboard): The Billing & Payments section offers admins a searchable table to manage payment records with customer details, doctor info, amount, payment status, transaction ID, and appointment details for efficient management.",
        "Manage Blogs(Administration Dashboard): This Section Allows Admin to view his added blog & news  information, Admin can add ,  delete or update blogs and by clicking add blogs button admin can add new blogs to the Blog & News Section",
        "My Billing History (Doctor Dashboard):The My Billing History section of the Doctor Dashboard provides a searchable table with customer details, total amount, payment status, transaction ID, payment date, appointment details, and an Actions column for efficient billing management.",
   ],
      challenges: [
        "Managing AI-based image generation for dynamic content visualization.",
        "Implementing a responsive sidebar with toggle functionality for mobile and tablet views.",
        "Efficiently managing data for organizers and participants while ensuring smooth navigation.",
        "Designing a user-friendly UI that suits both organizers and participants.",
      ],
      shortComings: [
        "Pagination count in some table sections lacks proper dynamic data visualizations.",
        "Limited customization options for participant profiles.",
      ],
      improvementsNeeded: [
        "Smart Wait-Time Prediction System: Integrate machine learning to improve the accuracy of real-time wait-time predictions by analyzing historical data and current hospital traffic patterns.",
        "Chat-Activated Dashboard: Add end-to-end encryption and file-sharing size limits to enhance security and performance for doctor-pharmacist-patient communications.",
        "Billing & Payment System: Implement multi-payment gateway support (e.g., PayPal, local options) to increase accessibility and flexibility for patients across regions.",
        "Emergency Services Coordination: Introduce AI-driven triage prioritization and integration with external emergency services APIs for faster ambulance dispatch and coordination.",
        "Patient Health Gamification & Rewards System: Expand the rewards system with personalized health challenges and integration with wearable devices to track real-time health metrics for points.",
      ],
      readme: "https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync/blob/sayed-hub/README.md"
    },
    {
      id: 2,
      name: "PostPad",
      homeImage: "/Post-pad Home-Dark.pngg",
      title:
        "A forum-building website enabling users to post, comment, vote, and share content in real-time.",
      description:
        "This project is a fully responsive and interactive forum built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to post, comment, vote, and share content in real-time. Admins can manage users, announcements, and reported activities. The purpose is to create a scalable web application focusing on user experience, performance, and security.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Daisy Ui",
        "React Hook Form",
        "Stripe",
        "Tanstack Query",
        "FireBase",
        "SweetAlert",
        "Toastify",
        "JWT",
        "Node.Js",
        "Express.Js",
        "MongoDB",
      ],
      images: [
        { src: "/Postpad-Home-light.png", alt: "Project" },
        { src: "/PostPad-User-Add-Post.png", alt: "Project" },
        { src: "/Post-pad My Post.png", alt: "Project" },
        { src: "/PostPad-UserProfile.png", alt: "Project" },
        { src: "/Post-Pad Comment.png", alt: "Project" },
        { src: "/post-pad total users.png", alt: "Project" },
        { src: "/Post-pad Admin home dark.png", alt: "Project" },
        { src: "/post-pad admin report.png", alt: "Project" },
        { src: "/PostPad-member-payment.png", alt: "Project" },
      ],
      links: {
        livePreview: "https://post-pad.web.app/",
        github: "https://github.com/sayed725/PostPad-Client",
        github1: "https://github.com/sayed725/PostPad-Server",
      },
      features: {
        public: [
          {
            section: "Homepage",
            details: [
              "Displays posts from newest to oldest.",
              "Search functionality based on post tags.",
              "Sort by Popularity (based on Upvote-Downvote difference).",
              "Pagination with 5 posts per page.",
              "Announcement section with live notification count.",
              "Advertisement section to show ads.",
            ],
          },
          {
            section: "Post Details",
            details: [
              "Displays post details such as title, author, tags, description, and comments.",
              "Comment, Upvote, Downvote, and Share functionality.",
              "Any logged-in user can vote, comment, and share posts.",
            ],
          },
          {
            section: "Membership Page",
            details: [
              "Allows users to pay to become members and post more than 5 posts.",
              "Added Stripe Payment Method to facilitate membership purchases.",
            ],
          },
          {
            section: "Authentication",
            details: ["Social and Email/Password login using Firebase."],
          },
        ],
        privateUser: [
          {
            section: "User Dashboard",
            details: [
              "My Profile: Displays user's name, email, badges, and recent posts.",
              "Add Post: Post content with tags, upvotes, and downvotes.",
              "My Posts: View and manage (delete, comment, report) user posts.",
            ],
          },
          {
            section: "Membership Perks",
            details: [
              "Gold Badge for members with an increased posting limit beyond 5 posts.",
            ],
          },
        ],
        admin: [
          {
            section: "Admin Dashboard",
            details: [
              {
                subsection: "Admin Profile",
                items: [
                  "Displays site stats (posts, users, comments) and a pie chart.",
                  "Add new tags for post categorization.",
                ],
              },
              {
                subsection: "Manage Users",
                items: [
                  "View all users with search functionality.",
                  "Make users admins and view subscription status.",
                  "Admins can promote users to admin status.",
                ],
              },
              {
                subsection: "Reported Comments",
                items: [
                  "View and manage reported comments.",
                  "Take actions such as deleting comments or banning users.",
                ],
              },
              {
                subsection: "Announcements",
                items: [
                  "Create and manage announcements visible to all users.",
                ],
              },
            ],
          },
        ],
      },
      challenges: [
        "Admin profile page with stats and a pie chart.",
        "JWT for secure login and role-based access.",
        "Firebase and MongoDB credentials secured with environment variables.",
        "Tanstack Query for efficient data fetching.",
        "Pagination in all tables and posts.",
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app.",
      ],
       readme: "https://github.com/sayed725/PostPad-Client/blob/main/README.md"
    },
    {
      id: 3,
      name: "BiteBank",
      homeImage: "/bitebank-1.jpeg",
      title:
        "A Food Sharing Website that allows users to add, get, update and delete food operation on several places.",
      description:
        "BiteBank is a user-friendly food sharing platform built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It supports CRUD operations (add, get, update, delete) for food items, allowing users to manage and request available foods. Features include a banner with top food slides, detailed food pages with request functionality, search by food title, sort and layout toggle options, and user dashboards for managing added and requested foods.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Daisy Ui",
        "React Silk",
        "Tanstack Query",
        "FireBase",
        "SweetAlert",
        "Toastify",
        "JWT",
        "Node.Js",
        "Express.Js",
        "MongoDB",
      ],
      images: [
        { src: "/Bite-Bank-availablefood.png", alt: "Project" },
        { src: "/Bite-bank-managefood.png", alt: "Project" },
        { src: "/Bite-Bnak-fooddetails.png", alt: "Project" },
        { src: "/Bite-bank-addfood.png", alt: "Project" },
      ],
      links: {
        livePreview: "https://a-11-bite-bank.web.app/",
        github: "https://github.com/sayed725/BiteBank-Client",
        github1: "https://github.com/sayed725/BiteBank-Server",
      },
      keyFeatures: [
        "Beautiful slides showcasing top foods on the banner.",
        "Add food functionality in the add food section.",
        "Food detail page accessible via View Details button for logged-in users to explore food information.",
        "Request button on food details section to request food preparation.",
        "Manage my food section for users to view, edit, and delete their added foods.",
        "My Request section to view requested foods and their details.",
        "Search functionality on available food page by food title.",
        "Sort and layout toggle buttons in available food section.",
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app.",
      ],
       readme: "https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync/blob/sayed-hub/README.md"
    },
    {
      id: 4,
      name: "Movielify",
      homeImage: "/Movielify Home.png",
      title:
        "A User-friendly website of exploring movies, viewing movie details, adding movies and deleting movies while managing user favorites.",
      description:
        "Movielify is a user-friendly movie portal built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It simplifies exploring movies, viewing details, adding movies, and managing user favorites. Features include a banner with top movie slides, detailed movie pages with favorite functionality, and a user dashboard for viewing favorite movies, all designed for a seamless user experience.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Daisy Ui",
        "FireBase",
        "Swiper.js",
        "React Hook Form",
        "React Star Rating",
        "SweetAlert",
        "Node.Js",
        "Express.Js",
        "MongoDB",
      ],
      images: [
        { src: "/Movielify Home.png", alt: "Project" },
        { src: "/Movielify all movie cards.png", alt: "Project" },
        { src: "/Movielify-moviedetails.png", alt: "Project" },
        { src: "/Movielify-addmovies.png", alt: "Project" },
      ],
      links: {
        livePreview: "https://assignment-10-b0e3a.web.app/",
        github: "https://github.com/sayed725/MovieLify-main-Client",
        github1: "https://github.com/sayed725/MovieLify-Server",
      },
      keyFeatures: [
        "Beautiful slides showcasing top movies on the banner.",
        "Explore Details button navigates logged-in users to the movie detail page for more information.",
        "Add to Favorite and Remove buttons on movie details section to manage favorite movies.",
        "Add Movie section for users to input their favorite movie details.",
        "My Favorite section to view all movies marked as favorites by the user.",
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app.",
      ],
       readme: "https://github.com/sayed725/MovieLify-main-Client/blob/main/README.md"
    },
    {
      id: 5,
      name: "Green Edventures",
      homeImage: "/green-home.png",
      title:
        "A Travel Booking Website that provide information on various eco-adventure options, to browse and learn more about each experience also consult experts if interested.",
      description:
        "Green Edventures is a React-based platform for eco-friendly travel, enabling users to explore adventures like Forest and Mangrove Forest Expeditions. It provides detailed information on eco-adventure options, allowing users to browse, learn about tours, connect with experts, and manage their profiles. The application focuses on delivering a seamless and informative user experience.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Daisy Ui",
        "FireBase",
        "SweetAlert",
        "Toastify",
        "Swiper.js",
      ],
      images: [
        { src: "/green-home.png", alt: "Project" },
        { src: "/greeen-destination.png", alt: "Project" },
        { src: "/green discover.png", alt: "Project" },
        { src: "/green-explore.png", alt: "Project" },
      ],
      links: {
        livePreview: "https://assingment-10-5294b.web.app/",
        github: "https://github.com/sayed725/GREEN-EDVENTURES",
        // github1: "https://github.com/sayed725/GREEN-EDVENTURES",
      },
      keyFeatures: [
        "Beautiful slides showcasing eco-adventures on the banner.",
        "Explore Now button navigates logged-in users to the Adventure Detail page for tour details.",
        "Talk with Expert button on tour details section for connecting via Google Meet or phone.",
        "My Profile section for users to view and update their information.",
        "Forget Password option on login section to reset user passwords.",
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app.",
      ],
       readme: "https://github.com/sayed725/GREEN-EDVENTURES/blob/main/README.md"
    },
    {
      id: 6,
      name: "Gadget Heaven",
      homeImage: "/Gadjet Heaven Home.png",
      title:
        "A e-commerce website of showcasing tech products where User can view details of the product and would like to add to cart or watch list.",
      description:
        "The platform is shopping of accessories. From smart devices to the coolest accessories are available. The platform is the responsive website. In here, users can browse products also browse by categories. They can view details of the product and would like to add to cart or watch list.",
      techStack: ["React", "Tailwind CSS", "Daisy Ui", "Toastify"],
      images: [
        { src: "/Gadjet Heaven Home.png", alt: "Project" },
        { src: "/Gadget heaven products.png", alt: "Project" },
        { src: "/Gadjet Heaven Products Details.png", alt: "Project" },
        { src: "/Gadject Heaven Project cart.png", alt: "Project" },
      ],
      links: {
        livePreview: "https://a8-gadget-heaven-725.netlify.app/",
        github: "https://github.com/sayed725/Gadget-Heaven",
      },
       readme: "https://github.com/sayed725/Gadget-Heaven/blob/main/README.md"
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen w-11/12 mx-auto bg-white text-gray-900 flex flex-col gap-10 py-10">
        <div className="mx-auto py-6 px-2">
          <h1 className="text-5xl font-bold">Project Not Found</h1>
          <p className="mt-5">
            Sorry, the project with ID {id} could not be found.
          </p>
        </div>
      </div>
    );
  }

  // Custom Arrow Components
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 z-5 w-6 h-6 rounded-md bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-all duration-300"
      onClick={onClick}
    >
      <svg
        className="w-4 h-4 text-white "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-md bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-all duration-300"
      onClick={onClick}
    >
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "20px" }}>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 bg-purple-600 rounded-full hover:bg-purple-600 transition-all duration-300" />
    ),
  };

  return (
    <div className="min-h-screen w-11/12 mx-auto bg-white text-gray-900 flex flex-col gap-10 py-10">
      <Slider {...settings} className="w-full">
        {project.images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[500px] mx-auto object-cover  sm:object-fill rounded-3xl"
            />
          </div>
        ))}
      </Slider>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto "
      >
        {project.links && (
          <div className="my-6 flex flex-wrap gap-4 justify-center items-center">
            <a
              href={project.links.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white btn btn-sm sm:btn-md rounded-md hover:bg-purple-600"
            >
              <VscPreview size={18} /> Live Preview
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white btn btn-sm sm:btn-md rounded-md flex items-center gap-2 hover:bg-gray-700"
            >
              <FaGithub size={18} /> GitHub Client
            </a>
            <a
              href={project.links.github1}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white btn btn-sm sm:btn-md rounded-md sm:flex items-center gap-2 hover:bg-gray-700"
            >
              <FaGithub size={18} /> GitHub Server
            </a>
          </div>
        )}

        <h1 className="text-3xl  lg:text-5xl  font-bold">{project.name}</h1>
        <p className="mt-5">{project.description}</p>

        <section className="mt-6">
          <h2 className="text-3xl mb-2 font-bold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {(project.features || project.keyFeatures) && (
          <section className="mt-6">
            <h1 className="text-3xl font-bold mb-6">Key Features</h1>
            {project.features?.public && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Public Features</h2>
                {project.features.public.map((feature, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl mb-2 font-semibold">
                      {feature.section}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}

            {project.features?.privateUser && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                  Private User Features
                </h2>
                {project.features.privateUser.map((feature, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl mb-2 font-semibold">
                      {feature.section}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}
            {project.features?.admin && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Admin Features</h2>
                {project.features.admin.map((feature, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl mb-2 font-semibold">
                      {feature.section}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {feature.details.map((subfeature, idx) => (
                        <li key={idx}>
                          <strong>{subfeature.subsection}:</strong>
                          <ul className="list-disc pl-6">
                            {subfeature.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}
            {project.keyFeatures &&
              !project.features?.public &&
              !project.features?.privateUser &&
              !project.features?.admin && (
                <section className="mb-8">
                  <ul className="list-disc pl-6 space-y-2">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}
            {project.myContributions && (
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-3">My Contributions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {project.myContributions.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}
          </section>
        )}

        {project.challenges && (
          <section className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">
              Challenges & Tasks Implemented
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
        )}

        {project.improvementsNeeded && (
          <section className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">Improvements Needed</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.improvementsNeeded.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </section>
        )}

       <div className="mt-6">
         <h2 className="text-2xl font-semibold mb-3">Want to know more ?</h2>
         <ul>
            <li>
                Dive into the full project overview with detailed features, pages overview, json data structure and installation steps here:
                 <a href={`${project.readme}`}
               target="_blank"
                  className="underline hover:text-blue-500 font-semibold">View Project Readme.md</a>
            </li>
         </ul>

       </div>
      </motion.div>
      <Link to={"/projects"}>
        <button className="bg-gray-900 text-white btn btn-sm sm:btn-md rounded-md flex items-center gap-2 hover:bg-gray-700 ">
          {" "}
          <IoMdArrowRoundBack /> Back to Projects
        </button>
      </Link>
    </div>
  );
};

export default Details;
