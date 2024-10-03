import React from "react";

const Faq = () => {
  return (
    <>
      <div className="relative w-full bg-white px-6 pt-10 pb-8 my-8  sm:mx-auto sm:max-w-5xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className=" text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              Frequently asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I hire a freelancer?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To hire a freelancer, you can browse our platform, view
                  freelancer profiles, and post a job listing detailing your
                  project requirements. Interested freelancers will apply, and
                  you can select the best fit for your needs.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What payment methods do you accept?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We accept a variety of payment methods, including credit
                  cards, PayPal, and bank transfers. Payments are processed
                  securely through our platform.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How does the project management process work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Once you hire a freelancer, you can communicate directly
                  through our platform. You'll be able to set milestones, review
                  progress, and provide feedback to ensure your project is on
                  track.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Can I get a refund if I am not satisfied?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a satisfaction guarantee. If you are not satisfied
                  with the work provided, please contact our support team within
                  14 days to discuss a potential refund.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I communicate with the freelancer?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  You can communicate with your freelancer through our messaging
                  system. Additionally, you can schedule calls or video chats as
                  needed to discuss project details more effectively.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Do you provide support for disputes?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Yes, our support team is here to help resolve any disputes
                  between freelancers and clients. We encourage open
                  communication and will mediate if necessary to ensure a fair
                  resolution.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
