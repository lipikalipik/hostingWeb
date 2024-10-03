import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="container-fluid mt-28">
      <div className="horizontal-scroll-container">
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div
              role="main"
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl font-semibold leading-9 text-center text-black sm:text-6xl">
                This Week Blogs
              </h1>
              <p className="text-base leading-normal text-center text-black mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                If you're looking for random paragraphs, you've come to the
                right place. When a random word or a random sentence isn't quite
                enough
              </p>
            </div>
            <div className="lg:flex items-stretch md:mt-12 mt-8">
              {/* Blog Cards */}
              <div className="lg:w-1/2">
                <BlogCard
                  date="12 April 2024"
                  title="Web Development"
                  description="Building responsive and modern websites"
                  imgSrc="https://i.ibb.co/DYxtCJq/img-1.png"
                />
                <BlogCard
                  date="12 April 2024"
                  title="Graphic Design"
                  description="Creative designs that make your brand stand out"
                  imgSrc="https://i.ibb.co/3C5HvxC/img-2.png"
                />
                <BlogCard
                  date="12 April 2024"
                  title="Content Writing"
                  description="Engaging content that tells your story"
                  imgSrc="https://i.ibb.co/Ms4qyXp/img-3.png"
                />
              </div>
              <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <BlogCard
                  date="12 April 2024"
                  title="Digital Marketing"
                  description="Enhance your online visibility with our strategies."
                  imgSrc="https://i.ibb.co/6Wfjf2w/img-4.png"
                />
                <BlogCard
                  date="12 April 2024"
                  title="SEO Optimization"
                  description="Maximize your website's performance"
                  imgSrc="https://i.ibb.co/3yvZBpm/img-5.png"
                />
                <BlogCard
                  date="12 April 2024"
                  title="The Decorated Ways"
                  description="Dive into minimalism"
                  imgSrc="https://i.ibb.co/gDdnJb5/img-6.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ date, title, description, imgSrc }) => (
  <div className="relative transition-transform duration-300 ease-in-out hover:scale-105 mb-8">
    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
      {date}
    </p>
    <div className="absolute bottom-0 left-0 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-base leading-4 text-white mt-2">{description}</p>
      <Link
        to={"/blogDetails"}
        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
      >
        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
        <svg
          className="fill-stroke"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75 12.5L10.25 8L5.75 3.5"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
    <img src={imgSrc} className="w-full rounded-md" alt={title} />
  </div>
);

export default BlogSection;
