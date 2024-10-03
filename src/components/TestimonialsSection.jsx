import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="heading m">
        <h1 className="text-6xl  font-semibold text-center mt-28">
          Hear from Our Clients
        </h1>
        <p className="text-center">Real Experiences, Real Success</p>
      </div>

      <section className="testimonials p-6  ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Slider {...settings}>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt="Client 1"
                    />
                    <p>
                      "Working with this agency transformed my business. They
                      delivered quality work on time and exceeded expectations"
                    </p>
                  </div>
                  <div className="testimonial-name">SARAH JONES</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt="Client 2"
                    />
                    <p>
                      "I was impressed by the professionalism and creativity of
                      the team. They brought my vision to life!"
                    </p>
                  </div>
                  <div className="testimonial-name">DAVID SMITH</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt="Client 3"
                    />
                    <p>
                      "Their attention to detail and dedication to client
                      satisfaction made all the difference. Highly recommend!"
                    </p>
                  </div>
                  <div className="testimonial-name">LUCY BROWN</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt="Client 4"
                    />
                    <p>
                      "The team delivered high-quality work ahead of schedule. I
                      will definitely work with them again!"
                    </p>
                  </div>
                  <div className="testimonial-name">MARK WILSON</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                      alt="Client 5"
                    />
                    <p>
                      "Fantastic experience! They provided excellent support and
                      advice throughout the project."
                    </p>
                  </div>
                  <div className="testimonial-name">EMILY DAVIS</div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
