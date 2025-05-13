import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
const PostPadDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    "React",
    "TailwindCSS",
    "DaisyUI",
    "React Hook Form",
    "React Simple Star Rating",
    "Firebase Authentication",
    "MongoDB",
    "Express.js",
    "CORS",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col gap-10 py-10">
      <div className="relative flex justify-center overflow-hidden">
        <img
          src="/Postpad-Home.png"
          alt="Project"
          className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
        />
        <img
          src="/postPad-post-details.png"
          alt="Project"
          className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
        />
        <img
          src="/PostPad-admin-home.png"
          alt="Project"
          className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
        />
        {/* <div className="absolute inset-0 bg-purple-900 opacity-20"></div> */}
      </div>

      <div>
        {/* Main Content */}
        <div className="mx-auto py-6 px-2">
          <h1 className="text-5xl font-bold">PostPad</h1>
          <p className="mt-5">
            {" "}
            This project is a fully responsive and interactive forum built using
            the MERN Stack (MongoDB, Express.js, React.js, Node.js). The
            platform allows users to post, comment, vote, and share content in
            real-time. Admins can manage users, announcements, and reported
            activities. The purpose of this project is to create a scalable web
            application that focuses on user experience, performance, and
            security.
          </p>
          {/* Technologies Used */}
          <section className="mt-6">
            <h2 className="text-3xl mb-2 font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges Faced */}
          <section className="mt-6">
            <h1 className="text-3xl font-bold  mb-6">Key Features</h1>

            {/* Public Features */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Public Features</h2>
              <div className="mb-4">
                <h3 className="text-xl mb-2 font-semibold">Homepage</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Displays posts from newest to oldest.</li>
                  <li>Search functionality based on post tags.</li>
                  <li>
                    Sort by Popularity (based on Upvote-Downvote difference).
                  </li>
                  <li>Pagination with 5 posts per page.</li>
                  <li>Announcement section with live notification count.</li>
                  <li>Advertisement section to show ads.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl mb-2 font-semibold">Post Details</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Displays post details such as title, author, tags,
                    description, and comments.
                  </li>
                  <li>Comment, Upvote, Downvote, and Share functionality.</li>
                  <li>
                    Any logged-in user can vote, comment, and share posts.
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl mb-2 font-semibold">Membership Page</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Allows users to pay to become members and post more than 5
                    posts.
                  </li>
                  <li>
                    Added Stripe Payment Method to facilitate membership
                    purchases.
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Social and Email/Password login using Firebase.</li>
                </ul>
              </div>
            </section>

            {/* Private User Features */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">
                Private User Features
              </h2>
              <div className="mb-4">
                <h3 className="text-xl mb-2 font-semibold">User Dashboard</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    My Profile: Displays user's name, email, badges, and recent
                    posts.
                  </li>
                  <li>
                    Add Post: Post content with tags, upvotes, and downvotes.
                  </li>
                  <li>
                    My Posts: View and manage (delete, comment, report) user
                    posts.
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl mb-2 font-semibold">Membership Perks</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Gold Badge for members with an increased posting limit
                    beyond 5 posts.
                  </li>
                </ul>
              </div>
            </section>

            {/* Admin Features */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Admin Features</h2>
              <div className="mb-4">
                <h3 className="text-xl mb-2 font-semibold">Admin Dashboard</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Admin Profile:</strong>
                    <ul className="list-disc pl-6">
                      <li>
                        Displays site stats (posts, users, comments) and a pie
                        chart.
                      </li>
                      <li>Add new tags for post categorization.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Manage Users:</strong>
                    <ul className="list-disc pl-6">
                      <li>View all users with search functionality.</li>
                      <li>Make users admins and view subscription status.</li>
                      <li>Admins can promote users to admin status.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Reported Comments:</strong>
                    <ul className="list-disc pl-6">
                      <li>View and manage reported comments.</li>
                      <li>
                        Take actions such as deleting comments or banning users.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Announcements:</strong>
                    <ul className="list-disc pl-6">
                      <li>
                        Create and manage announcements visible to all users.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            {/* Challenges & Tasks Implemented */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">
                Challenges & Tasks Implemented
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Admin profile page with stats and a pie chart.</li>
                <li>JWT for secure login and role-based access.</li>
                <li>
                  Firebase and MongoDB credentials secured with environment
                  variables.
                </li>
                <li>Tanstack Query for efficient data fetching.</li>
                <li>Pagination in all tables and posts.</li>
              </ul>
            </section>
          </section>

          {/* Improvements Needed */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold">Improvements Needed</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Improve detail page UI for a more interactive experience.</li>
              <li>Add multi-language support for a more diverse user base.</li>
              <li>
                Optimize loading times for data-heavy sections of the app.
              </li>
            </ul>
          </section>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://post-pad.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
            >
              Live Preview
            </a>
            <a
              href="https://github.com/sayed725/PostPad-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700"
            >
              <FaGithub size={18} /> GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPadDetails;
