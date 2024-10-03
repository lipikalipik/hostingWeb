import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const timelineRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    timelineRefs.current.forEach((timeline, index) => {
      gsap.fromTo(
        timeline,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: timeline,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-semibold">
          Elevate Your Projects with Our{" "}
          <span className="dark-text">Freelancing</span> Expertise!
        </h1>
        <p className="text-xl font-medium mt-3">
          Our well-trained team is dedicated to delivering top-notch services
          tailored to your needs without breaking the bank.
        </p>
      </div>

      <div className="relative wrap overflow-hidden">
        <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2"></div>

        {/* Timeline Events */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } justify-between items-center w-full`}
            ref={(el) => (timelineRefs.current[index] = el)}
          >
            <div className="order-1 w-full sm:w-5/12"></div>
            <div className="z-20 flex items-center order-1 dark-bg shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {index + 1}
              </h1>
            </div>
            <div className="order-1 dark-bg rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                {index === 0 && "Programming and Development"}
                {index === 1 && "Digital Marketing"}
                {index === 2 && "Writing and Content Creation"}
                {index === 3 && "Graphic Design and Visual Arts"}
                {index === 4 && "Audio and Video Production"}
                {index === 5 && "Translation and Language Services"}
              </h3>
              <ul className="text-white leading-tight">
                {index === 0 && (
                  <>
                    <li>Web Development (Front-end, Back-end, Full-stack)</li>
                    <li>Mobile App Development (iOS, Android)</li>
                    <li>Software Development</li>
                    <li>Data Science and Analytics</li>
                    <li>Artificial Intelligence and Machine Learning</li>
                    <li>Cybersecurity</li>
                    <li>Database Management</li>
                  </>
                )}
                {index === 1 && (
                  <>
                    <li>SEO (Search Engine Optimization)</li>
                    <li>Social Media Marketing</li>
                    <li>Content Marketing</li>
                    <li>PPC (Pay-Per-Click) Advertising</li>
                    <li>Email Marketing</li>
                    <li>Influencer Marketing</li>
                    <li>Affiliate Marketing</li>
                  </>
                )}
                {index === 2 && (
                  <>
                    <li>Article Writing</li>
                    <li>Blogging</li>
                    <li>Copywriting</li>
                    <li>Technical Writing</li>
                    <li>Creative Writing</li>
                    <li>Editing and Proofreading</li>
                    <li>Content Strategy</li>
                  </>
                )}
                {index === 3 && (
                  <>
                    <li>Logo Design</li>
                    <li>Brochure Design</li>
                    <li>Infographic Design</li>
                    <li>UI/UX Design</li>
                    <li>Web Design</li>
                    <li>Illustration</li>
                    <li>Photography</li>
                  </>
                )}
                {index === 4 && (
                  <>
                    <li>Voiceover Work</li>
                    <li>Music Composition</li>
                    <li>Audio Editing</li>
                    <li>Video Editing</li>
                    <li>Motion Graphics</li>
                    <li>Sound Design</li>
                    <li>Podcasting</li>
                  </>
                )}
                {index === 5 && (
                  <>
                    <li>Document Translation</li>
                    <li>Website Localization</li>
                    <li>Subtitle Translation</li>
                    <li>Technical Translation</li>
                    <li>Legal Translation</li>
                    <li>Proofreading and Editing (Languages)</li>
                    <li>Language Tutoring</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
