import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="about dark-bg">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-36 ">
          {/*Main Col*/}
          <div
            id="profile"
            className="w-full lg:w-3/6 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white  mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              {/* Image for mobile view*/}
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("/profile.jpeg")' }}
              />
              <h1 className="text-3xl font-bold pt-8 lg:pt-0">Gagan K M </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25" />
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current light-text pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                Founder of SirvTech
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current light-text pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>{" "}
                Bengaluru, Karnataka, India
              </p>
              <p className="pt-8 text-sm">
                {" "}
                Hi, I’m Gagan , founder at @SirvTech , a freelancing agency
                dedicated to providing high-quality freelance services across
                various industries and also a computer science engineering
                student at VVCE , Mysore. With a passion for technology,
                innovation, and problem-solving, I’ve built SirvTech to help
                businesses achieve their goals through expert freelance talent.
              </p>
              <div className="pt-12 pb-8">
                <button className="med-bg hover:dark-bg text-white font-bold py-2 px-8 rounded-md">
                  Let's Talk{" "}
                </button>
              </div>
              <div className="mt-6 pb-16 lg:pb-0 w-4/5  mx-auto flex flex-wrap items-center justify-between">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/gagankm2619?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  data-tippy-content="@linkedin_handle"
                >
                  <svg
                    className="h-6 fill-current dark-text hover:light-text"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.586v-5.4c0-1.285-.025-2.94-1.793-2.94-1.794 0-2.07 1.39-2.07 2.83v5.51h-3.586V9h3.444v1.606h.049c.48-.908 1.653-1.863 3.408-1.863 3.646 0 4.326 2.4 4.326 5.523v6.186zM6.371 7.542c-1.152 0-2.071.926-2.071 2.059 0 1.134.919 2.06 2.071 2.06h.037c1.149 0 2.071-.926 2.071-2.06 0-1.133-.922-2.059-2.071-2.059zm1.78 12.91H4.591V9h3.56v11.452zm12.59-20.452H1.453C.649 0 0 .649 0 1.453v21.094C0 23.351.649 24 1.453 24h21.094C23.351 24 24 23.351 24 22.547V1.453C24 .649 23.351 0 22.547 0z" />
                  </svg>
                </a>

                <a
                  className="link"
                  href="#"
                  data-tippy-content="https://www.instagram.com/sirvtech?igsh=Y2VxdWQ1bHI3ZWEy"
                >
                  <svg
                    className="h-6 fill-current dark-text hover:light-text"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="https://www.linkedin.com/company/sirvtech/"
                  data-tippy-content="@linkedin_handle"
                >
                  <svg
                    className="h-6 fill-current dark-text hover:light-text"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.586v-5.4c0-1.285-.025-2.94-1.793-2.94-1.794 0-2.07 1.39-2.07 2.83v5.51h-3.586V9h3.444v1.606h.049c.48-.908 1.653-1.863 3.408-1.863 3.646 0 4.326 2.4 4.326 5.523v6.186zM6.371 7.542c-1.152 0-2.071.926-2.071 2.059 0 1.134.919 2.06 2.071 2.06h.037c1.149 0 2.071-.926 2.071-2.06 0-1.133-.922-2.059-2.071-2.059zm1.78 12.91H4.591V9h3.56v11.452zm12.59-20.452H1.453C.649 0 0 .649 0 1.453v21.094C0 23.351.649 24 1.453 24h21.094C23.351 24 24 23.351 24 22.547V1.453C24 .649 23.351 0 22.547 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/*Img Col*/}
          <div className="w-full lg:w-3/6">
            <img
              src="/profile.jpeg"
              className="[height:90vh] [width:40vw] [border:4px_solid_#032841]  transition transform duration-300 ease-linear hover:scale-110  object-cover rounded-xl shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
