import { Element } from "react-scroll";
// import ProjectCard from "./ProjectCard";
import NewProjectCard from "./NewProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Care Matrix",
      image: "/bitebank-1.jpeg",
      description:
        "Care Matrix is a full-featured hospital management platform designed to streamline appointments, enhance internal communication, optimize pharmacy operations, and centralize admin controls for patients, doctors, pharmacists, receptionists and administrators. Care Matrix is a robust, role-based hospital management system developed by a 6-member team to revolutionize healthcare service delivery. As the team leader, I spearheaded the project’s architecture, task delegation, team collaboration, and contributed significantly to the frontend, backend, and dashboard development. The platform addresses key healthcare needs with the following major features: Streamlined Appointments - Patients can book, reschedule, or cancel appointments seamlessly, with a dynamic calendar view and real-time availability checks for doctors. Enhanced Internal Communication - I implemented a real-time chat system without socket.io, enabling secure messaging between patients, doctors, and pharmacists, with live data updates across roles using polling and TanStack Query. Optimized Pharmacy Operations - The pharmacy module includes inventory tracking, stock alerts, and order management, ensuring efficient medicine dispensing and restocking processes. Centralized Admin Controls - Admins can manage user roles, approve doctor applications, and oversee system analytics, with a custom workflow for role-based data access and approval requests. Additional contributions include designing a patient rewards system where users earn points for appointments and redeem them for discounts, and managing doctor data approval workflows to validate and integrate new doctors into the system. The project leverages a scalable tech stack, with MongoDB for data storage, Express.js for APIs, and React with Redux for a responsive UI.",
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
    },
    {
      id: 2,
      name: "PostPad",
      image: "/bitebank-1.jpeg",
      description:
        "This platform allows users to post, comment, vote, and share content in real-time. Admins can manage users, announcements, and reported activities. The purpose of this project is to create a scalable web application that focuses on user experience, performance, and security.",
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
    },
    {
      id: 3,
      name: "BiteBank",
      image: "/bitebank-1.jpeg",
      description:
        "This is a user-friendly food sharing website where there is some CRUD (adding food,getting food, update food and deleting food) operations on several places. Besides that, users can also request for available food and manage requested foods.",
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
    },
    {
      id: 4,
      name: "Movielify",
      image: "/bitebank-1.jpeg",
      description:
        "This is a user-friendly Movie Portal to simplify the process of exploring movies, viewing movie details, adding movies, and deleting movies while managing user favorites. This project includes a dynamic user interface, robust functionality, and seamless user experience.",
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
    },
    {
      id: 5,
      name: "Green Edventures",
      image: "/bitebank-1.jpeg",
      description:
        "This page is a React-based application where users can explore specific types of eco-friendly travel adventures like Forest Expeditions, Mangrove Forest Expeditions.This application provide detailed information on various eco-adventure options, allowing users to browse, learn more about each experience, and consult experts if they’re interested.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Daisy Ui",
        "FireBase",
        "SweetAlert",
        "Toastify",
        "Swiper.js",
      ],
    },
    {
      id: 6,
      name: "Gadget Heaven",
      image: "/bitebank-1.jpeg",
      description:
        "The platform is shopping of accessories. From smart devices to the coolest accessories are available. The platform is the responsive website. In here, users can browse products also browse by categories. They can view details of the product and would like to add to cart or watch list.",
      techStack: ["React", "Tailwind CSS", "Daisy Ui", "Toastify"],
    },
  ];
  return (
    <Element name="projects">
      <section className="py-5 lg:py-10" id="projects">
        <div className="">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
            Projects<span className="text-purple-600">.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <NewProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

    </Element>
  );
};

export default Projects;
