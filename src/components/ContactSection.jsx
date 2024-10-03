import React, { useState } from "react";
import AboutSection from "./AboutSection";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* About */}

      <AboutSection />

      <div className="container flex justify-center items-center mb-24">
        <div className=" flex flex-col justify-center items-center  dark-bg rounded-lg py-8 px-24 m-6 sm:m-12 lg:m-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-white my-2">
            Get In Touch
          </h1>

          {/* Trigger Button */}
          <button
            onClick={openModal}
            className="dark-bg med-bg text-white font-bold my-3 py-4 px-6 rounded"
          >
            Contact now
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-11/12 sm:w-1/2 md:w-1/3 p-6 rounded shadow-md border-blue-500 border">
                  <div className="flex justify-end">
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="text-gray-700 hover:text-red-500 bg-white"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <form action="#" method="post">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="dark-bg text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                      Send Message
                    </button>
                    <p className="my-4">
                      If you prefer to contact us by email.
                      <a
                        className="text-blue-500 hover:underline"
                        href="mailto:gagankmb510@gmail.com"
                      >
                        {" "}
                        gagankmb510@gmail.com
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
