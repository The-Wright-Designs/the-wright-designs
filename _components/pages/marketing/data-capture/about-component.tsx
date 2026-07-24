import Image from "next/image";
import Link from "next/link";
import GoogleRatingComponent from "@/_components/ui/reviews/google-rating-component";

const AboutComponent = () => {
  return (
    <main className="grid gap-5 desktop:grid-cols-[1fr_300px]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-pink shrink-0" />
            <p className="text-pink text-[13px] font-bold uppercase">
              Free Loyalty &amp; Data Capture Assessment
            </p>
          </div>

          <h1 className="text-heading text-[36px] phone:text-heading">
            Still Tracking Loyalty on a Stamp Card?
          </h1>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md desktopSmall:hidden">
          <Image
            src="/assets/images/data-capture/4tg2r4rgwte.png"
            alt="A paper loyalty stamp system at a till counter"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p>
            <span className="font-bold">
              Still using a paper stamp card, a notebook, or a spreadsheet to
              track your customers and their purchases?
            </span>{" "}
            We&apos;ll work with you and your team to figure out the best way to
            digitise it —{" "}
            <span className="font-bold">
              slotting in around your existing till or POS system, without
              making things complicated.
            </span>
          </p>

          <p>
            <span className="font-bold">
              We&apos;re a Plett based web design and development studio
            </span>{" "}
            that builds custom digital tools for local retail, pharmacy, coffee
            shop, salon, and restaurant owners — so we know how to fit a
            solution around your day-to-day systems.
          </p>
          <p>
            We&apos;re also happy to meet in person over coffee for 30 minutes
            to talk through your current setup and what&apos;s possible, if
            you&apos;d prefer a face-to-face chat.
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
        <GoogleRatingComponent />
      </div>
      <div className="hidden mt-5 desktop:grid gap-5">
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <Image
            src="/assets/images/data-capture/4tg2r4rgwte.png"
            alt="A paper loyalty stamp system at a till counter"
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <Image
            src="/assets/images/data-capture/rwh564ehgr.png"
            alt="A business owner and customer scanning a loyalty QR code at checkout"
            fill
            className="object-cover"
            sizes="450px"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutComponent;
