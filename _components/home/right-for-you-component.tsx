"use client";

import { useState, useRef, useEffect } from "react";

const RightForYouComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]!.style.maxHeight =
        contentRefs.current[openIndex]!.scrollHeight + "px";
    }
  }, [openIndex]);

  return (
    <section className="mb-15">
      <h2 className="text-subheading mb-10 pb-1 border-b-4 border-pink tablet:col-span-2 desktopSmall:col-span-1">
        Are we right for you?
      </h2>
      <p>
        Our vast experience in the industry means that, although we might not
        have seen it all just yet, we&apos;re pretty close.{" "}
        <span className="font-bold">
          Our team has worked with clients from a wide range of industries
        </span>
        , each with a unique set of problems that needed solving. We&apos;re
        proud to say that{" "}
        <span className="font-bold">
          we always deliver to the highest standard
        </span>
        , regardless of the project&apos;s size.
      </p>
      <ul className="mt-10 grid gap-5">
        {accordionData.map((item, index) => (
          <li
            key={index}
            className={`px-4 py-6 bg-blue text-white w-full rounded-md ease-in-out duration-200 hover:cursor-pointer ${
              openIndex !== index ? "desktopSmall:hover:bg-pink" : "bg-pink"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <p
              className={`font-medium text-[17px] text-left text-white flex justify-between gap-4 w-full ease-in-out duration-75 ${
                index === openIndex && "border-b-2 border-white pb-4"
              }`}
            >
              {item.question}
              <span>
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ease-in-out duration-200 w-4 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                >
                  <path d="M12 12L0 0H24L12 12Z" fill="#FFFFFF" />
                </svg>
              </span>
            </p>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className={`transition-max-height duration-200 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                maxHeight:
                  openIndex === index
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
              }}
            >
              <p className="mt-4 text-white pr-8 italic">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const accordionData = [
  {
    question:
      "Struggling with a poorly designed or developed WordPress website?",
    answer:
      "Not a problem! Client requests to redesign and develop poorly managed WordPress sites are the most common scenarios we face, and they’ve become our specialty as a result. We'll handle everything from the redesign and development to the domain and hosting transfer.",
  },
  {
    question:
      "Has your web designer or developer dropped off the face of the earth?",
    answer:
      "Don't worry – you're not alone, and we've helped many clients in this exact situation! Our experienced team will step in right away to get your project back on track. We'll recover your existing content and handle everything from domain transfers to development work, keeping you informed every step of the way. Let us assist in turning this setback into an opportunity to make your website the best it can be.",
  },
  {
    question: "Can you help me with my painfully slow website?",
    answer:
      "While we prefer not to sift through someone else's half-baked code, we can certainly help you with a fresh start. Our team will build you a new website from scratch, ensuring it's fast, secure, and set on a solid foundation. Speed matters online, and in today's world, you can't afford for your website to be left behind.",
  },
  {
    question: "Want to switch web designers or developers but are unsure how?",
    answer:
      "No stress! Our team will work directly with your current provider to ensure all your valuable online assets (website, domain, emails, databases, etc.) are safely stored and transferred, all whilst keeping you in the loop throughout the process.",
  },
  {
    question:
      "Looking for a team to keep your ever-changing website or blog up-to-date and secure?",
    answer:
      "Yes, we do that too! A maintenance package tailored to your needs will keep your website running as smoothly and securely as possible, so you can focus on your business.",
  },
  {
    question:
      "Looking to maintain control of your website yourself with you your current CMS (WordPress, Contentful, Strapi, etc.), but need a bespoke frontend that better fits your brand?",
    answer:
      "We can help! Our team will build a fast and classy custom frontend that integrates seamlessly with your existing CMS, allowing you to keep all of your data safely in place and continue with business as usual.",
  },
  {
    question:
      "Have an idea for an app or online solution but don't know where to start?",
    answer:
      "You're in the right place! A quick consultation with our team lead, Chad, will provide a clear and realistic roadmap of development, costs, and timelines involved in bringing your idea to life.",
  },
  {
    question:
      "Tired of being boxed in by restrictive and costly e-commerce themes and templates?",
    answer:
      "We hear you! Our team can build a beautiful frontend tailored to your taste and needs that integrates directly with your existing Shopify, WooCommerce, BigCommerce, etc. store backend. This way, you get the best of both worlds without the painstaking process of having to set up shop again on another platform.",
  },
];

export default RightForYouComponent;
