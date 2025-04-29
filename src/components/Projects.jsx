import React from 'react';
import { HiArrowDown } from 'react-icons/hi';
import bharatmaker from '../assets/img/BharatMaker.png';
import rrt from '../assets/img/RRT.png';
import tracker from '../assets/img/Finance-Tracker.png';
import quickstay from '../assets/img/QuickStay.png';
import netflixgpt from '../assets/img/Netflix-GPT.png';


const projects = [
    {
        id: 1,
        name: "RRT Educational Group",
        description:
          "Delivered a live, production-ready education website as a freelance project for RRTEducation (school and college). Built a fully responsive platform using modern frontend technologies, optimized for performance and SEO. Implemented structured layouts for course listings, admissions, and academic programs, ensuring cross-device compatibility and smooth user experience.",
        image: rrt,
        techStack: ["react.js", "css", "javascript", "figma"],
        link: "https://rrteducationalgroup.com/",
        color: "#fc815c",
        type: "(School & College Website)",
      },
  {
    id: 2,
    name: "Bharatmaker",
    description:
      "Collaborated as a freelance frontend developer with an IIT Bombay alumni-led startup to build a 3D printing platform. Developed a responsive web application using React, Redux, and Tailwind CSS, integrating REST APIs for design file uploads, material selection, and real-time city-based vendor and customer notifications, with a focus on performance optimization and enhanced user experience.",
    image: bharatmaker,
    techStack: ["react.js", "tailwindcss", "javascript", "redux"],
    link: "https://www.youtube.com/watch?v=2m0Bc68w3C0",
    color: "#fc815c",
    type: "(3D-Printing Service Platform)",
  },
  {
    id: 3,
    name: "NetflixGPT ",
    description:
      "Developed a Netflix clone with GPT-powered search, Firebase authentication, React, Redux Toolkit, Tailwind CSS, and TMDB API for a scalable and responsive user experience.",
    image: netflixgpt,
    techStack: ["react.js", "tailwind", "javascript"],
    link: "https://netfliiix-gpt.netlify.app/",
    color: "#47afa1",
    type: "(Movie Streaming Platform with AI-Powered Search)",
  },
  {
    id: 4,
    name: "Hotel Booking App",
    description:
      "Developed a hotel booking app using React, allowing users to search for hotels, view details, and make reservations. The app features a user-friendly interface, real-time availability checks, and booking management.",
    image: quickstay,
    techStack: ["react.js", "tailwind", "javascript"],
    link: "https://quickstay-hotelbooking.netlify.app/",
    color: "#ff5553",
    type: "(Hotel Reservation System)",
  },
  {
    id: 5,
    name: "Personal Finance Tracker ",
    description:
      "Built a personal finance tracker with React to help users manage and track income, expenses, and savings, featuring dynamic financial charts and a responsive user interface.",
    image: tracker,
    techStack: ["react.js", "css", "javascript"],
    link: "https://personal-finance-tracker-git-main-ismail-qadris-projects.vercel.app/",
    color: "#156cdd",
    type: "(Finance Management App)",
  },
];

const Projects = () => {
  return (
    <>
      {/* Latest Work Button */}
      <div id="skills" className="flex justify-center mt-10">
        <div className="inline-flex items-center text-white px-6 hover:bg-white hover:text-black transition-all duration-300 bg-gradient-to-l from-[#1595b6] to-[rgba(31,38,103,0.9)] bg-[#4595eb] rounded-lg relative cursor-pointer p-3 text-2xl">
          Latest Work
          <span className="ml-2 group-hover:translate-y-1 transition-transform duration-300">
            <HiArrowDown size={20} />
          </span>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="relative w-full min-h-screen bg-white flex flex-col items-center py-20">
        {/* Center Line (only visible on md and above) */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#1595b6] to-[rgba(31,38,103,0.9)]" />

        <div className="flex flex-col space-y-24 w-full max-w-7xl px-4">
          {projects.map((project, index) => (
            <div key={project.id} className="mt-12">
              {/* Layout: For small screens (stacked), for large screens (horizontal) */}
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-10 items-center`}
              >
                {/* Image */}
                <a href={project.link} className="w-full md:w-1/2">
                  <img
                    className="w-full max-w-[400px] mx-auto"
                    src={project.image}
                    alt={project.name}
                  />
                </a>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3 className="font-bold text-3xl md:text-4xl" style={{ color: project.color }}>
                    {project.name}
                  </h3>
                  <span className="text-lg md:text-xl" style={{ color: project.color }}>
                    {project.type}
                  </span>
                  <p className="text-justify mt-4 text-gray-700">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, idx) => (
                      <li
                        key={idx}
                        className="border rounded-full border-gray-400 px-4 py-2 text-sm"
                      >
                        #{tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
