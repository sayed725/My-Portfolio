import { FaGithub } from "react-icons/fa";

const MovielifyDetails=()=> {
  const technologies = [
    "React", "TailwindCSS", "DaisyUI", "Swiper.js",
    "React Hook Form", "React Simple Star Rating",
    "Firebase Authentication", "MongoDB", "Express.js", "CORS"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col gap-10 py-10">
      <div className="relative flex justify-center overflow-hidden">
              <img
                src="/Movilify-home.png"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/Movielify-allmovies.png"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              <img
                src="/Movielify-addmovies.png"
                alt="Project"
                className="w-1/2 object-contain h-64 rounded-3xl hover:scale-[1.05] transition-all"
              />
              {/* <div className="absolute inset-0 bg-purple-900 opacity-20"></div> */}
            </div>


     <div>
    
       
     

      {/* Main Content */}
      <div className="mx-auto py-6 px-2">
        <h1 className="text-5xl font-bold">Movielify</h1>
        <p className="mt-5"> Welcome to this project.This is a user-friendly Movie Portal to simplify the process of exploring movies, viewing movie details, adding movies, and deleting movies while managing user favorites. This project includes a dynamic user interface, robust functionality, and seamless user experience.

</p>
          {/* Technologies Used */}
          <section className="mt-6">
            <h2 className="text-3xl mb-2 font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>
  
          {/* Challenges Faced */}
          <section className="mt-6">
          <h1 className="text-3xl font-bold  mb-6">Key Features</h1>

          <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>There is a beautiful slides showcasing images of top movies on Banner.</li>
              <li>On clicking the Explore Details Button navigated the logged-in user to the Movie Detail page where they can explore more about their Movie Details.</li>
              <li>On Movie Details section there is a Add to Favorite Button where user can add their favorite movies to favorite routes also a remove button to remove from favorite.</li>
              <li>On Add Movie section user can add their favorite movies details.</li>
              <li>My Favorite section user can see all the movies which an individual user added as their favorite.</li>
            </ul>








          </section>
  
         
         
  
          {/* Improvements Needed */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold">Improvements Needed</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Improve detail page UI for a more interactive experience.</li>
              <li>Add multi-language support for a more diverse user base.</li>
              <li>Optimize loading times for data-heavy sections of the app.</li>
            </ul>
          </section>
  
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a  href="https://assignment-10-b0e3a.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
            
             className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">
              Live Preview
            </a>
            <a   href="https://github.com/sayed725/MovieLify-main-Client"
                    target="_blank"
                    rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700">
              <FaGithub size={18} /> GitHub Link
            </a>
          </div>
        </div>
     </div>

    </div>
  );
}



export default MovielifyDetails;