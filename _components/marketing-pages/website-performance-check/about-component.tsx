import Image from "next/image";
import Link from "next/link";
import GoogleRatingComponent from "@/_components/reviews/google-rating-component";

const AboutComponent = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-pink shrink-0" />
          <p className="text-pink text-[13px] font-bold uppercase">
            Free Website Assessment
          </p>
        </div>

        <h1 className="text-heading text-[36px] phone:text-heading">
          Website Performance Check
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        <p>
          <span className="font-bold">
            Not sure if your website is actually working for you?
          </span>{" "}
          We&apos;ll assess it for speed, security, mobile usability, and
          whether it&apos;s really converting visitors into customers —{" "}
          <span className="font-bold">no cost, no obligation, no jargon.</span>
        </p>

        <p>
          <span className="font-bold">
            We&apos;re a Plett based web design and development studio
          </span>{" "}
          that builds clean, fast and secure websites that are made to convert —
          so we know exactly what to look for when we assess yours.
        </p>
        <p>
          We&apos;re also happy to meet in person over coffee for 30 minutes to
          walk you through the results if you&apos;d prefer a face-to-face chat.
        </p>
        <p>
          <span className="font-bold">Need more convincing?</span> Take a look
          at our{" "}
          <Link
            href="/recent-projects/websites"
            className="text-linkBlue underline underline-offset-[3px] desktopSmall:hover:cursor-pointer desktopSmall:hover:text-pink ease-in-out duration-300"
          >
            recent projects
          </Link>{" "}
          to see the kind of work we do, or read through our client reviews
          below.
        </p>
      </div>
      <GoogleRatingComponent cssClasses="desktopSmall:hidden" />
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-md min-[600px]:aspect-video desktopSmall:hidden">
        <Image
          src="/assets/images/website-performance-check/3r4twgrerw3r.png"
          alt="A poor website performance report displayed on a laptop"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <GoogleRatingComponent cssClasses="hidden desktopSmall:block" />
    </main>
  );
};

export default AboutComponent;
