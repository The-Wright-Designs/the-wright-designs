import Button from "../button";

const reasons = [
  {
    problem: "Poorly designed or developed WordPress site?",
    solution:
      "Redesigning and rebuilding poorly-managed WordPress sites is our specialty. We handle everything from the redesign and development to the domain and hosting transfer.",
  },
  {
    problem: "Has your web designer or developer disappeared?",
    solution:
      "You're not alone — we've helped many clients in this exact situation. We'll step in right away, recover your existing content, and handle everything from domain transfers to development, keeping you informed every step of the way.",
  },
  {
    problem: "Stuck with a painfully slow website?",
    solution:
      "We'll build you a new website from scratch, ensuring it's fast, secure, and set on a solid foundation. Speed matters online, and you can't afford for your website to be left behind.",
  },
  {
    problem: "Want to switch providers but unsure how?",
    solution:
      "No stress. We'll work directly with your current provider to ensure all your valuable online assets — website, domain, emails, databases — are safely stored and transferred, all whilst keeping you in the loop.",
  },
];

const RescueReasons = () => {
  return (
    <section className="my-15">
      <h2 className="text-subheading mb-6 pb-1 border-b-4 border-pink">
        We fix websites others gave up on
      </h2>
      <p className="mb-10">
        <span className="font-bold">
          Our team has worked with clients from a wide range of industries
        </span>
        , each with a unique set of problems that needed solving. Whatever state
        your site is in, we always deliver to the highest standard — regardless
        of the project&apos;s size.
      </p>
      <ul className="grid gap-5 tablet:grid-cols-2">
        {reasons.map((reason, index) => (
          <li
            key={index}
            className="px-6 py-8 bg-blue rounded-md flex flex-col gap-3"
          >
            <h3 className="text-pink text-[19px] font-medium normal-case">
              {reason.problem}
            </h3>
            <p className="text-white text-left">{reason.solution}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Button
          url="#contact"
          buttonColor="pink"
          cssClasses="w-full tablet:w-auto desktop:hover:cursor-pointer"
        >
          Get My Free Quote
        </Button>
      </div>
    </section>
  );
};

export default RescueReasons;
