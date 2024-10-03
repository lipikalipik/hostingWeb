import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const targets = [
      { id: "projectsCompleted", count: 150, suffix: "+" },
      { id: "clientsServed", count: 200, suffix: "+" },
      { id: "teamMembers", count: 50, suffix: "+" },
    ];

    const animateCountUp = (target, duration) => {
      let currentCount = 0;
      const increment = Math.ceil(target.count / (duration / 10));

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
          clearInterval(interval);
          currentCount = target.count;
          document.getElementById(target.id).textContent =
            currentCount + target.suffix;
        } else {
          document.getElementById(target.id).textContent = currentCount;
        }
      }, 10);
    };

    // GSAP animation trigger
    gsap.fromTo(
      statsRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center", // When the section reaches the center of the viewport
          onEnter: () => {
            targets.forEach((target) => animateCountUp(target, 1000));
          },
        },
      }
    );

    return () => {
      // Clean up GSAP ScrollTrigger instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className=" dark-bg">
      <div className="pt-12 sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-medium leading-9 text-white sm:text-4xl sm:leading-10">
              Powering Freelance Success Globally
            </h2>
            <p className="mt-3 text-xl leading-7  text-gray-400 sm:mt-4">
              Our skilled team of freelancers delivers high-quality projects
              across various industries. Trusted by clients worldwide, we offer
              tailored solutions at affordable rates.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10  sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 "></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto" ref={statsRef}>
                <dl className="med-bg rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-white  sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">
                      Projects Completed
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none  text-white"
                      id="projectsCompleted"
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-white  sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">
                      Clients Served
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none  text-white"
                      id="clientsServed"
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-white  sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">
                      Team Members
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none  text-white"
                      id="teamMembers"
                    >
                      0
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
