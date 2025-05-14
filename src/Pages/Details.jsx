import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

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
      title: "A multi-role complete hospital management system for doctors, pharmacists, receptionist, administrators and patients.",
      description: "Care Matrix is a full-featured hospital management platform designed to streamline appointments, enhance internal communication, optimize pharmacy operations, and centralize admin controls for patients, doctors, pharmacists, receptionists and administrators. Care Matrix is a robust, role-based hospital management system developed by a 6-member team to revolutionize healthcare service delivery. As the team leader, I spearheaded the project’s architecture, task delegation, team collaboration, and contributed significantly to the frontend, backend, and dashboard development. The platform addresses key healthcare needs with the following major features: Streamlined Appointments - Patients can book, reschedule, or cancel appointments seamlessly, with a dynamic calendar view and real-time availability checks for doctors. Enhanced Internal Communication - I implemented a real-time chat system without socket.io, enabling secure messaging between patients, doctors, and pharmacists, with live data updates across roles using polling and TanStack Query. Optimized Pharmacy Operations - The pharmacy module includes inventory tracking, stock alerts, and order management, ensuring efficient medicine dispensing and restocking processes. Centralized Admin Controls - Admins can manage user roles, approve doctor applications, and oversee system analytics, with a custom workflow for role-based data access and approval requests. Additional contributions include designing a patient rewards system where users earn points for appointments and redeem them for discounts, and managing doctor data approval workflows to validate and integrate new doctors into the system. The project leverages a scalable tech stack, with MongoDB for data storage, Express.js for APIs, and React with Redux for a responsive UI.",
      techStack: [
        "React", "Redux Toolkit", "React Router", "Tailwind CSS", "ShadCN Ui",
        "Stripe", "Axios", "Tanstack Query", "Toastify", "Sooner", "JWT",
        "FireBase", "Node.Js", "Express.Js", "MongoDB"
      ],
      images: [
        { src: "/careMatrix available bed.png", alt: "Project" },
        { src: "/careMtrix About us.png", alt: "Project" },
        { src: "/careMtrix appointment bokking.png", alt: "Project" },
        { src: "/careMtrix doctor overview.png", alt: "Project" },
        { src: "/careMatrix  revenue.png", alt: "Project" },
        { src: "/CareMatrix add bed.png", alt: "Project" },
        { src: "/careMatrix buy medicine.png", alt: "Project" },
        { src: "/carematrix recept Overview.png", alt: "Project" },
        { src: "/careMtrix payment record.png", alt: "Project" }
      ]
    },
    {
      id: 2,
      name: "PostPad",
      homeImage: "/Postpad-Home.png",
      title: "A forum-building website enabling users to post, comment, vote, and share content in real-time.",
      description: "This project is a fully responsive and interactive forum built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to post, comment, vote, and share content in real-time. Admins can manage users, announcements, and reported activities. The purpose is to create a scalable web application focusing on user experience, performance, and security.",
      techStack: [
        "React", "Tailwind CSS", "Daisy Ui", "React Hook Form", "Stripe",
        "Tanstack Query", "FireBase", "SweetAlert", "Toastify", "JWT",
        "Node.Js", "Express.Js", "MongoDB"
      ],
      images: [
        { src: "/Postpad-Home.png", alt: "Project" },
        { src: "/postPad-post-details.png", alt: "Project" },
        { src: "/PostPad-admin-home.png", alt: "Project" }
      ],
      links: {
        livePreview: "https://post-pad.web.app/",
        github: "https://github.com/sayed725/PostPad-Client"
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
              "Advertisement section to show ads."
            ]
          },
          {
            section: "Post Details",
            details: [
              "Displays post details such as title, author, tags, description, and comments.",
              "Comment, Upvote, Downvote, and Share functionality.",
              "Any logged-in user can vote, comment, and share posts."
            ]
          },
          {
            section: "Membership Page",
            details: [
              "Allows users to pay to become members and post more than 5 posts.",
              "Added Stripe Payment Method to facilitate membership purchases."
            ]
          },
          {
            section: "Authentication",
            details: ["Social and Email/Password login using Firebase."]
          }
        ],
        privateUser: [
          {
            section: "User Dashboard",
            details: [
              "My Profile: Displays user's name, email, badges, and recent posts.",
              "Add Post: Post content with tags, upvotes, and downvotes.",
              "My Posts: View and manage (delete, comment, report) user posts."
            ]
          },
          {
            section: "Membership Perks",
            details: [
              "Gold Badge for members with an increased posting limit beyond 5 posts."
            ]
          }
        ],
        admin: [
          {
            section: "Admin Dashboard",
            details: [
              {
                subsection: "Admin Profile",
                items: [
                  "Displays site stats (posts, users, comments) and a pie chart.",
                  "Add new tags for post categorization."
                ]
              },
              {
                subsection: "Manage Users",
                items: [
                  "View all users with search functionality.",
                  "Make users admins and view subscription status.",
                  "Admins can promote users to admin status."
                ]
              },
              {
                subsection: "Reported Comments",
                items: [
                  "View and manage reported comments.",
                  "Take actions such as deleting comments or banning users."
                ]
              },
              {
                subsection: "Announcements",
                items: [
                  "Create and manage announcements visible to all users."
                ]
              }
            ]
          }
        ]
      },
      challenges: [
        "Admin profile page with stats and a pie chart.",
        "JWT for secure login and role-based access.",
        "Firebase and MongoDB credentials secured with environment variables.",
        "Tanstack Query for efficient data fetching.",
        "Pagination in all tables and posts."
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app."
      ]
    },
    {
      id: 3,
      name: "BiteBank",
      homeImage: "/bitebank-1.jpeg",
      title: "A Food Sharing Website that allows users to add, get, update and delete food operation on several places.",
      description: "BiteBank is a user-friendly food sharing platform built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It supports CRUD operations (add, get, update, delete) for food items, allowing users to manage and request available foods. Features include a banner with top food slides, detailed food pages with request functionality, search by food title, sort and layout toggle options, and user dashboards for managing added and requested foods.",
      techStack: [
        "React", "Tailwind CSS", "Daisy Ui", "React Silk", "Tanstack Query",
        "FireBase", "SweetAlert", "Toastify", "JWT", "Node.Js", "Express.Js",
        "MongoDB"
      ],
      images: [
        { src: "/Bite-Bank-availablefood.png", alt: "Project" },
        { src: "/Bite-bank-managefood.png", alt: "Project" },
        { src: "/Bite-Bnak-fooddetails.png", alt: "Project" },
        { src: "/Bite-bank-addfood.png", alt: "Project" }
      ],
      keyFeatures: [
        "Beautiful slides showcasing top foods on the banner.",
        "Add food functionality in the add food section.",
        "Food detail page accessible via View Details button for logged-in users to explore food information.",
        "Request button on food details section to request food preparation.",
        "Manage my food section for users to view, edit, and delete their added foods.",
        "My Request section to view requested foods and their details.",
        "Search functionality on available food page by food title.",
        "Sort and layout toggle buttons in available food section."
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app."
      ]
    },
    {
      id: 4,
      name: "Movielify",
      homeImage: "/Movielify Home.png",
      title: "A User-friendly website of exploring movies, viewing movie details, adding movies and deleting movies while managing user favorites.",
      description: "Movielify is a user-friendly movie portal built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It simplifies exploring movies, viewing details, adding movies, and managing user favorites. Features include a banner with top movie slides, detailed movie pages with favorite functionality, and a user dashboard for viewing favorite movies, all designed for a seamless user experience.",
      techStack: [
        "React", "Tailwind CSS", "Daisy Ui", "FireBase", "Swiper.js",
        "React Hook Form", "React Star Rating", "SweetAlert", "Node.Js",
        "Express.Js", "MongoDB"
      ],
      images: [
        { src: "/Movielify Home.png", alt: "Project" },
        { src: "/Movielify-moviedetails.png", alt: "Project" },
        { src: "/Movielify-addmovies.png", alt: "Project" }
      ],
      keyFeatures: [
        "Beautiful slides showcasing top movies on the banner.",
        "Explore Details button navigates logged-in users to the movie detail page for more information.",
        "Add to Favorite and Remove buttons on movie details section to manage favorite movies.",
        "Add Movie section for users to input their favorite movie details.",
        "My Favorite section to view all movies marked as favorites by the user."
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app."
      ]
    },
    {
      id: 5,
      name: "Green Edventures",
      homeImage: "/green-home.png",
      title: "A Travel Booking Website that provide information on various eco-adventure options, to browse and learn more about each experience also consult experts if interested.",
      description: "Green Edventures is a React-based platform for eco-friendly travel, enabling users to explore adventures like Forest and Mangrove Forest Expeditions. It provides detailed information on eco-adventure options, allowing users to browse, learn about tours, connect with experts, and manage their profiles. The application focuses on delivering a seamless and informative user experience.",
      techStack: [
        "React", "Tailwind CSS", "Daisy Ui", "FireBase", "SweetAlert",
        "Toastify", "Swiper.js"
      ],
      images: [
        { src: "/green-home.png", alt: "Project" },
        { src: "/greeen-destination.png", alt: "Project" },
        { src: "/green discover.png", alt: "Project" },
        { src: "/green-explore.png", alt: "Project" }
      ],
      keyFeatures: [
        "Beautiful slides showcasing eco-adventures on the banner.",
        "Explore Now button navigates logged-in users to the Adventure Detail page for tour details.",
        "Talk with Expert button on tour details section for connecting via Google Meet or phone.",
        "My Profile section for users to view and update their information.",
        "Forget Password option on login section to reset user passwords."
      ],
      improvementsNeeded: [
        "Improve detail page UI for a more interactive experience.",
        "Add multi-language support for a more diverse user base.",
        "Optimize loading times for data-heavy sections of the app."
      ]
    },
    {
      id: 6,
      name: "Gadget Heaven",
      homeImage: "/Gadjet Heaven Home.png",
      title: "A e-commerce website of showcasing tech products where User can view details of the product and would like to add to cart or watch list.",
      description: "The platform is shopping of accessories. From smart devices to the coolest accessories are available. The platform is the responsive website. In here, users can browse products also browse by categories. They can view details of the product and would like to add to cart or watch list.",
      techStack: ["React", "Tailwind CSS", "Daisy Ui", "Toastify"],
      images: [
        { src: "/Gadjet Heaven Home.png", alt: "Project" }
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen w-11/12 mx-auto bg-white text-gray-900 flex flex-col gap-10 py-10">
        <div className="mx-auto py-6 px-2">
          <h1 className="text-5xl font-bold">Project Not Found</h1>
          <p className="mt-5">Sorry, the project with ID {id} could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-11/12 mx-auto bg-white text-gray-900 flex flex-col gap-10 py-10">

        
      <div className="relative flex justify-center overflow-hidden">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
          />
        ))}
      </div>

      <div>

        {project.links && (
            <div className="mt-6 flex gap-4">
              <a
                href={project.links.livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
              >
                Live Preview
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700"
              >
                <FaGithub size={18} /> GitHub Link
              </a>
            </div>
          )}


        <div className="mx-auto py-6 px-2">
          <h1 className="text-5xl font-bold">{project.name}</h1>
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
                      <h3 className="text-xl mb-2 font-semibold">{feature.section}</h3>
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
                  <h2 className="text-2xl font-semibold mb-3">Private User Features</h2>
                  {project.features.privateUser.map((feature, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-xl mb-2 font-semibold">{feature.section}</h3>
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
                      <h3 className="text-xl mb-2 font-semibold">{feature.section}</h3>
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
              {project.keyFeatures && !project.features?.public && !project.features?.privateUser && !project.features?.admin && (
                <section className="mb-8">
                  <ul className="list-disc pl-6 space-y-2">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}
            </section>
          )}

          {project.challenges && (
            <section className="mt-6">
              <h2 className="text-2xl font-semibold mb-3">Challenges & Tasks Implemented</h2>
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

          
        </div>
      </div>
    </div>
  );
};

export default Details;