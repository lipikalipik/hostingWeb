import React from "react";

const BlogDetails = () => {
  return (
    <>
      <section className="section blog-single  py-16 bg-gray-50">
        <div className="relative w-full dark-bg -mt-40">
          <img
            className="w-full object"
            src="/blog-img.avif"
            alt="Blog Image"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Black overlay */}
        </div>

        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row lg:space-x-10  justify-center">
            {/* Main Content */}
            <div className="mt-10 lg:w-3/4 mx-4 sm:mx-4">
              <h1 className="text-3xl font-semibold text-black">
                Top 10 Tips for Freelancers: Maximizing Your Success
              </h1>
              <div className="mt-6 mb-5 flex items-center space-x-2">
                <div className="h-[58px] w-[58px] rounded-full border-2 border-primary p-0.5">
                  <img
                    src="/profile.png"
                    alt="Author"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Gagan K M</p>
                  <span className="text-sm text-gray-500">
                    Sept 30, 2024. 5 Min read
                  </span>
                </div>
              </div>

              {/* Introduction */}
              <div className="content text-gray-600">
                <p>
                  Freelancing offers incredible opportunities for independence,
                  flexibility, and creativity. But with great freedom comes
                  responsibility. As a freelancer, you wear many hats: project
                  manager, marketer, accountant, and more. How do you juggle it
                  all while maintaining high standards for your work? Success in
                  freelancing isn’t accidental—it’s built through consistent
                  effort, strategic thinking, and self-discipline.
                </p>
                <p>
                  In this blog, I’ll share the top 10 tips every freelancer
                  should know. These strategies will not only help you survive
                  in the freelance world but thrive, helping you build a lasting
                  career that you’re proud of.
                </p>

                {/* Tip 1 */}
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    1. Build a Strong Portfolio
                  </h2>
                  <p>
                    Your portfolio is your best marketing tool. It’s the first
                    thing potential clients will look at to assess your skills.
                    A great portfolio doesn’t just show off your work—it tells a
                    story of your journey as a freelancer. Include a variety of
                    projects, showcase case studies, and provide testimonials.
                    Don’t forget to update it regularly, adding any new skills
                    or significant projects you’ve completed.
                  </p>
                  <p>
                    For example, if you’re a web developer, showcase different
                    types of websites—e-commerce, portfolio sites, blogs—to
                    demonstrate your versatility. It’s not just about quantity;
                    focus on quality, ensuring that the work displayed reflects
                    your best abilities.
                  </p>
                </div>

                {/* Tip 2 */}
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    2. Set Clear Goals
                  </h2>
                  <p>
                    Success begins with clarity. Define what you want to achieve
                    as a freelancer. Are you aiming for financial independence,
                    more creative freedom, or the opportunity to work with
                    high-profile clients? Your goals will guide your actions and
                    decisions. For instance, if your goal is to make a certain
                    income each month, track your progress and adjust your
                    strategies accordingly. Clear goals give you direction and
                    help you measure your success.
                  </p>
                  <p>
                    Break larger goals down into smaller, manageable tasks.
                    Create weekly or monthly objectives to stay on track. And
                    remember, goals can evolve—revisit and revise them as you
                    grow.
                  </p>
                </div>

                {/* Tip 3 */}
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    3. Network Effectively
                  </h2>
                  <p>
                    Networking is key to growing your freelance business. But
                    it’s not just about attending events or joining online
                    groups—it’s about building relationships. Whether it’s
                    through LinkedIn, social media, or local meetups, focus on
                    engaging meaningfully with others in your industry. Share
                    insights, offer help, and be open to collaboration.
                  </p>
                  <p>
                    A strong network can lead to referrals and new
                    opportunities. You never know where your next client might
                    come from, so always be approachable and professional.
                  </p>
                </div>

                {/* Add more detailed sections like above for the rest of the tips */}

                {/* Conclusion */}
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Final Thoughts
                  </h2>
                  <p>
                    Freelancing offers incredible freedom, but it also requires
                    determination and strategy. By focusing on building your
                    portfolio, networking, managing your time wisely, and
                    continuously improving your skills, you can create a
                    successful and sustainable freelance career.
                  </p>
                  <p>
                    Remember, success doesn’t happen overnight. Stay patient,
                    keep refining your approach, and celebrate small wins along
                    the way. Here’s to your freelancing journey and all the
                    opportunities it brings!
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="mt-10 lg:mt-10 lg:w-1/4 mx-4 sm:mx-0">
              <div className="dark-bg p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white border-b pb-3">
                  About Us
                </h3>
                <p className="text-gray-100">
                  We are a freelancing agency dedicated to connecting talented
                  freelancers with businesses looking for skilled professionals.
                  Our mission is to empower freelancers to achieve their goals
                  and help businesses find the right talent.
                </p>
              </div>

              <div className="mt-10 dark-bg p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white border-b pb-3">
                  More Blogs
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-100 hover:text-primary">
                      Freelancing Tips
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-100 hover:text-primary">
                      Business Strategies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-100 hover:text-primary">
                      Time Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-100 hover:text-primary">
                      Networking
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-10 dark-bg p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white border-b pb-3">
                  Tags
                </h3>
                <ul className="mt-4 space-x-2">
                  {[
                    "Freelance",
                    "Tips",
                    "Success",
                    "Business",
                    "Networking",
                  ].map((tag, index) => (
                    <li key={index} className="inline-block">
                      <a
                        href="#"
                        className="bg-gray-200  text-gray-600 py-1 px-3 rounded-full hover:bg-primary hover:text-white"
                      >
                        {tag}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
