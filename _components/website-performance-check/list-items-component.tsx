const features = [
  {
    title: "Full Site Assessment",
    description:
      "We check your site's speed, mobile experience, security, and whether your booking or contact forms actually work the way they should.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 desktopSmall:size-8"
      >
        <path
          d="M28.0002 28.0002L22.2135 22.2135M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z"
          className="stroke-white desktopSmall:stroke-pink"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Plain-English Report & Next Steps",
    description:
      "No tech-speak. You'll get a straightforward summary of what's working, what's not, and a clear plan of action if you'd like our help fixing it.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 desktopSmall:size-8"
      >
        <path
          d="M18.6664 2.6656H8.0008C7.29363 2.6656 6.61542 2.94658 6.11537 3.44671C5.61532 3.94685 5.3344 4.62518 5.3344 5.33248V26.6675C5.3344 27.3748 5.61532 28.0531 6.11537 28.5533C6.61542 29.0534 7.29363 29.3344 8.0008 29.3344H23.9992C24.7064 29.3344 25.3846 29.0534 25.8846 28.5533C26.3847 28.0531 26.6656 27.3748 26.6656 26.6675V10.6662M18.6664 2.6656C19.0884 2.66492 19.5064 2.74775 19.8963 2.90932C20.2862 3.07088 20.6403 3.308 20.9382 3.60701L25.7217 8.39139C26.0214 8.68943 26.2592 9.04391 26.4212 9.43436C26.5832 9.82481 26.6663 10.2435 26.6656 10.6662M18.6664 2.6656V9.3328C18.6664 9.68645 18.8069 10.0256 19.0569 10.2757C19.3069 10.5258 19.646 10.6662 19.9996 10.6662L26.6656 10.6662M13.3336 11.9997H10.6672M21.3328 17.3334H10.6672M21.3328 22.6672H10.6672"
          className="stroke-white desktopSmall:stroke-pink"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Are You Losing Customers?",
    description:
      "We'll check whether your contact forms, WhatsApp links, and buttons are actually working — and whether visitors can easily get in touch or make a booking.",
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
      <div className="flex flex-col gap-2">
        <p className="text-grey text-[14px] font-bold">What you get</p>
        <h2 className="text-heading text-[20px]">
          A Clear Picture of Where You Stand
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
    </section>
  );
};

export default ListItemsComponent;
