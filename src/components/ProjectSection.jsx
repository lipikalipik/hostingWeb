import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  useEffect(() => {
    // Animate the full container
    const container = document.querySelector(".project-section-container");
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 50, // Start from below
      },
      {
        opacity: 1,
        y: 0, // Move to original position
        duration: 1, // Animation duration
        ease: "power2.out", // Easing function
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // Trigger when the top of the container is at 80% of the viewport height
          once: true, // Animation only occurs once
        },
      }
    );

    // Select all image cards for subsequent animations
    const images = document.querySelectorAll(".image-card");

    // GSAP animation setup for images
    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          opacity: 0,
          scale: 0.8,
          rotation: 15, // Start slightly rotated
          x: index % 2 === 0 ? 100 : -100,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0, // Rotate to original position
          x: 0,
          duration: 0.8,
          ease: "back.out(1.5)", // Using Back ease for a bouncing effect
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="container-fluid mt-20 project-section-container">
        <div className="heading mt-32 text-center p-5">
          <h1 className="text-black text-6xl font-semibold">
            Glimpse of <span className="dark-text">SirvTech</span> Success
            Stories
          </h1>
          <p className="text-dark font-medium text-lg">
            See how we’ve helped businesses grow through creative design,
            development, and strategy
          </p>
        </div>

        <div className="h-full dark-bg py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {/* Image Cards */}
              <a
                href="#"
                className="image-card  group relative flex h-48 items-end overflow-hidden rounded-md bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?ga=GA1.1.823067000.1726412944&semt=ais_hybrid"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </a>

              <a
                href="#"
                className="image-card  group relative flex h-48 items-end overflow-hidden rounded-md bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdlbmN5fGVufDB8fDB8fHww"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Tech
                </span>
              </a>

              <a
                href="#"
                className="image-card  group relative flex h-48 items-end overflow-hidden rounded-md bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://img.freepik.com/free-photo/content-concept-laptop-screen_53876-13531.jpg?ga=GA1.1.823067000.1726412944&semt=ais_hybrid"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Dev
                </span>
              </a>

              <a
                href="#"
                className="image-card  group relative flex h-48 items-end overflow-hidden rounded-md bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Retro
                </span>
              </a>
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
