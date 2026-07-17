import Image from "next/image";

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
          Based in Plettenberg Bay, we&apos;re happy to meet in person over
          coffee for 30 minutes to walk you through the results if you&apos;d
          prefer a face-to-face chat.
        </p>
      </div>
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-md min-[600px]:aspect-video desktopSmall:hidden">
        <Image
          src="/assets/images/website-performance-check/3r4twgrerw3r.png"
          alt="A poor website performance report displayed on a laptop"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </main>
  );
};

export default AboutComponent;
