import Image from "next/image";

import Button from "@/_components/button";

const features = [
  {
    title: "Built Around the Way You Work",
    description:
      "No off-the-shelf template. Whatever we build is tailored to your business and the way you and your team already work — not the other way around.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 desktopSmall:size-8"
      >
        <path
          d="M23.4 5.6L19.7 9.3L19.7 12.3L22.7 12.3L26.4 8.6C27.1 11.1 26.4 13.9 24.4 15.9C22.2 18.1 19 18.7 16.3 17.7L8.4 25.6C7.2 26.8 5.3 26.8 4.1 25.6C2.9 24.4 2.9 22.5 4.1 21.3L12 13.4C11 10.7 11.6 7.5 13.8 5.3C15.8 3.3 18.6 2.6 21.1 3.3L23.4 5.6Z"
          className="stroke-white desktopSmall:stroke-pink"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Digital Loyalty, Made Simple",
    description:
      "We'll show you how to replace paper stamp cards or spreadsheets with a simple digital loyalty system your customers and staff will actually use.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 desktopSmall:size-8"
      >
        <path
          d="M16 4L19.708 11.512L28 12.719L22 18.566L23.416 26.824L16 22.925L8.584 26.824L10 18.566L4 12.719L12.292 11.512L16 4Z"
          className="stroke-white desktopSmall:stroke-pink"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Works Alongside Your Existing POS",
    description:
      "No need to rip out what you've already got. We build solutions that sit alongside your current POS or till system, not against it.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 desktopSmall:size-8"
      >
        <path
          d="M4 12H28M8 4H24C25.1046 4 26 4.89543 26 6V26C26 27.1046 25.1046 28 24 28H8C6.89543 28 6 27.1046 6 26V6C6 4.89543 6.89543 4 8 4ZM11 18H11.01M16 18H16.01M21 18H21.01M11 23H11.01M16 23H16.01M21 23H21.01"
          className="stroke-white desktopSmall:stroke-pink"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Know Your Customers Better",
    description:
      "See who's buying, how often, and what they love — so you can bring customers back with less guesswork and less admin.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 desktopSmall:size-8"
      >
        <path
          d="M21.3338 28V25.3333C21.3338 23.9188 20.7718 22.5623 19.7715 21.5621C18.7713 20.5619 17.4146 20 16 20H7.99936C6.58476 20 5.2281 20.5619 4.22782 21.5621C3.22755 22.5623 2.6656 23.9188 2.6656 25.3333V28M21.3338 4.17057C22.4775 4.46707 23.4905 5.13493 24.2136 6.06932C24.9367 7.00372 25.329 8.15176 25.329 9.33324C25.329 10.5147 24.9367 11.6628 24.2136 12.5972C23.4905 13.5316 22.4775 14.1994 21.3338 14.4959M29.3344 27.9998V25.3332C29.3335 24.1515 28.9402 23.0035 28.2161 22.0696C27.4921 21.1357 26.4783 20.4686 25.3341 20.1732M17.3334 9.33333C17.3334 12.2789 14.9454 14.6667 11.9997 14.6667C9.05392 14.6667 6.66592 12.2789 6.66592 9.33333C6.66592 6.38781 9.05392 4 11.9997 4C14.9454 4 17.3334 6.38781 17.3334 9.33333Z"
          className="stroke-white desktopSmall:stroke-pink"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const ListItemsComponent = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <p className="text-grey text-[14px] font-semibold">What you get</p>
        <h2 className="text-heading text-[20px]">
          A Simple Way to Know Your Customers
        </h2>
      </div>

      <ul className="flex flex-col gap-5">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex items-start gap-5 rounded-lg desktopSmall:items-center desktopSmall:bg-pink desktopSmall:px-5 desktopSmall:py-4"
          >
            <div className="flex items-center justify-center bg-pink rounded-lg size-9 shrink-0 desktopSmall:bg-white desktopSmall:size-16">
              {feature.icon}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-bold desktopSmall:text-white">
                {feature.title}
              </p>
              <p className="text-[14px] text-left desktopSmall:text-white">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 desktopSmall:grid grid-cols-[1.25fr_1fr] gap-10 desktopSmall:h-[250px]">
        <div className="hidden relative aspect-square rounded-lg overflow-hidden shadow-md min-[600px]:aspect-video desktopSmall:block desktopSmall:aspect-auto">
          <Image
            src="/assets/images/data-capture/4tg2r4rgwte.png"
            alt="A paper loyalty stamp system at a till counter"
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-md min-[600px]:aspect-video desktopSmall:aspect-auto">
          <Image
            src="/assets/images/data-capture/rwh564ehgr.png"
            alt="A business owner and customer scanning a loyalty QR code at checkout"
            fill
            className="object-cover"
            sizes="(min-width: 1100px) 100vw, 450px"
          />
        </div>
      </div>
    </section>
  );
};

export default ListItemsComponent;
