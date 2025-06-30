import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const projectsData = [
    {
      images: [
        'https://i.ibb.co/Q7W02f4B/Screenshot-53.png',
        'https://i.ibb.co/QFPMJwfS/Screenshot-54.png',
      ],
      name: 'Tour-package-booking-management',
      stack: 'React, Firebase,react router,jwt, Tailwind, Node.js,mongodb, Express',
      description:
        'A modern full-stack MERN tour booking platform integrated with Firebase Authentication. It allows users to explore tour packages, view detailed itineraries, make bookings, and manage their travel experiences.',
      liveLink: 'tour-package-4f41d.web.app/',
      githubClient: 'https://github.com/MohammadMasumHossain/Tour-package-booking-management',
      githubServer: 'https://github.com/MohammadMasumHossain/Tour-package-booking-Management-serversite',
    },
    {
      images: [
        
        'https://i.ibb.co/LhpKkPZC/Screenshot-51.png',
        'https://i.ibb.co/1YqTmT3k/Screenshot-52.png',
      ],
      name: ' PlantPal - Houseplant Care & Tracking ',
      stack: 'React, MongoDB, Express, Node.js,react router ,framer motion,jwt,firebase',
      description:
        'PlantPal is a user-friendly plant management web application designed to help houseplant enthusiasts log, organize, and track the care routines for their beloved indoor plants. With personalized plant dashboards, users can ensure timely care and monitor their plant’s health effortlessly.',
      liveLink: 'plant-care-2aaea.web.app',
      githubClient: 'https://github.com/MohammadMasumHossain/HousePLant-care-client',
      githubServer: 'https://github.com/MohammadMasumHossain/House-plant-care-server',
    },
    {
      images: [
        'https://i.ibb.co/wZwVL2Ls/Screenshot-58.png',
        'https://i.ibb.co/XZc5LcTG/Screenshot-59.png',
      ],
      name: 'Healthcare Subscription Box Service',
      stack: 'React, react router,firebase, tailwind css,daisy ui,framer motion',
      description:
        'A modern healthcare subscription box platform where users can browse, subscribe, and manage personalized healthcare services. The intuitive interface and seamless user experience ensures users stay informed and engaged with their health.',
      liveLink: 'https://subscription-box-dfb58.web.app/',
      githubClient: 'https://github.com/MohammadMasumHossain/Subscription-box',
      
    },
  ];

  return (
    <section id='project' className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">My Projects</h2>

        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-md ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Swiper Carousel */}
              <div className="w-full md:w-1/2">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="rounded-lg overflow-hidden"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`Project ${idx + 1} Image ${i + 1}`}
                        className="h-60 w-full object-cover rounded-lg shadow-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
                <p className="text-sm font-medium text-gray-600">
                  <span className="font-semibold text-gray-800">Stack:</span> {project.stack}
                </p>
                <p className="text-gray-700">{project.description}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary flex items-center gap-1"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline flex items-center gap-1"
                    >
                      Client <FaGithub />
                    </a>
                  )}
                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline flex items-center gap-1"
                    >
                      Server <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
