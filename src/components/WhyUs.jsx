import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faDollarSign,
  faClock,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const features = [
    {
      icon: faUsers,
      title: "Diverse Talent Pool",
      description:
        "Access a wide range of skilled freelancers for every project.",
    },
    {
      icon: faDollarSign,
      title: "Affordable Rates",
      description:
        "Get quality work at competitive prices tailored to your budget.",
    },
    {
      icon: faClock,
      title: "Quick Turnaround",
      description: "We ensure your projects are completed on time, every time.",
    },
    {
      icon: faTools,
      title: "Expert Support",
      description:
        "Our experienced team is here to guide you through every step.",
    },
  ];

  const featureRefs = useRef([]);

  useEffect(() => {
    featureRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 }, // From
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // When the top of the element hits 80% of the viewport
            toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
            once: true, // Animation will only happen once
          },
        }
      );
    });
  }, []);

  return (
    <section className="body-font dark-bg text-white pt-20">
      <div className="flex justify-center text-center text-6xl font-regular mb-10">
        Why Choose Us?
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 md:w-1/4 sm:w-1/2"
              ref={(el) => (featureRefs.current[index] = el)}
            >
              <div className="med-bg rounded-lg shadow-lg px-4 py-6 transform transition duration-500 hover:scale-105">
                <div className="flex justify-center text-4xl text-white mb-3">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h2 className="title-font font-regular text-2xl text-white">
                  {feature.title}
                </h2>
                <p className="mt-2 text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
