import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" dark-bg ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="items-center flex flex-col justify-between sm:flex-row sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                SirvTech
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 ">
              <li>
                <Link
                  to={"/testimonials"}
                  className="hover:underline me-4 md:me-6"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to={"/services"} className="hover:underline me-4 md:me-6">
                  Services
                </Link>
              </li>

              <li>
                <Link to={"/contact"} className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-300 text-center ">
            © 2024{" "}
            <a href="/" className="hover:underline">
              SirvTech
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
