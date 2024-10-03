import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid hero-sec  ">
        <div className="hidden sm:block absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>

        <div className="mb-16">
          <div className="">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                    New Launch
                  </p>
                </div>
                <h1 className=" mb-6  text-center text-3xl font-bold leading-none tracking-tight text-white sm:text-6xl md:mx-auto">
                  <span className="relative inline-block">
                    <span className="relative">Your</span>
                  </span>{" "}
                  Gateway To Top Notch Freelance Talent
                </h1>
                <p className="text-base text-white md:text-lg text-center ">
                  Discover skilled freelancers to bring your projects to life
                  and elevate your business.
                </p>
              </div>
              <div className="flex items-center justify-center ">
                <button
                  type="submit"
                  className="   inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  transform  ease-in hover:scale-105 "
                >
                  Get Started
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-blue-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className=" hidden sm:block">
            <div className="" />
            <div className="relative grid  mx-auto  divide-y rounded  sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
              <div className=" transition [box-shadow:rgb(179,_196,245)6px_6px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] inline-block p-8 text-center bg-white mx-2 rounded-sm outline outline-1 outline-blue-500  ">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full  shadow-lg">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-black">
                  Hire Top Talent
                </p>
              </div>
              <div className="transition [box-shadow:rgb(179,_196,245)6px_6px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] inline-block p-8 text-center bg-white mx-2 rounded-sm outline outline-1 outline-blue-500 ">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full shadow-lg">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-black">
                  Quick Turnaround
                </p>
              </div>
              <div className="transition [box-shadow:rgb(179,_196,245)6px_6px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] inline-block p-8 text-center bg-white mx-2 rounded-sm outline outline-1 outline-blue-500  ">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full shadow-lg">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-black">
                  Quality Assurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
