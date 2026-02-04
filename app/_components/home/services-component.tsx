import Image from "next/image";
import Button from "../button";

const ServicesComponent = () => {
  return (
    <section className="mb-15">
      <h2 className="text-subheading pb-1 border-b-4 border-pink tablet:col-span-2 desktopSmall:col-span-1">
        Services
      </h2>
      <p className="font-light my-10">
        We take a client-centred approach,{" "}
        <span className="font-bold">
          focusing on clear communication and exceeding expectations
        </span>
        . Here&apos;s how we break down our services into four distinct phases:
      </p>
      <ul className="grid gap-10 desktopSmall:gap-[60px]">
        <li className="border-b border-pink/50 pb-10 tablet:grid grid-cols-2 gap-10 desktopSmall:pb-15">
          <div className="flex gap-4 mb-7 desktopSmall:mb-0">
            <div className="pr-2 border-r-2 border-blue/25 flex flex-col items-center justify-between">
              <h3 className="font-light text-pink text-center text-[32px] [writing-mode:vertical-rl] rotate-180">
                Phase 1
              </h3>
              <svg
                width="29"
                height="49"
                viewBox="0 0 29 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_341_129)">
                  <path
                    d="M0.7 48.345L0 43.145L8.2 20.745C8.8 21.345 9.4 21.845 10.1 22.145C10.8 22.545 11.5 22.745 12.3 23.045L4.5 44.645L0.7 48.345ZM28.6 48.345L24.8 44.745L16.8 23.245C17.5 23.045 18.3 22.745 19 22.345C19.7 21.945 20.4 21.545 20.9 20.945L29.1 43.245L28.6 48.345ZM14.6 22.145C12.3 22.145 10.4 21.345 8.7 19.745C7.1 18.145 6.3 16.145 6.3 13.845C6.3 11.945 6.9 10.245 8 8.74497C9.1 7.24497 10.5 6.34497 12.3 5.94497V0.344971H16.9V5.94497C18.7 6.34497 20.1 7.34497 21.2 8.74497C22.3 10.245 22.9 11.945 22.9 13.845C22.9 16.145 22.1 18.045 20.5 19.745C18.9 21.445 16.9 22.145 14.6 22.145ZM14.6 17.445C15.6 17.445 16.4 17.045 17.1 16.345C17.8 15.645 18.2 14.745 18.2 13.845C18.2 12.945 17.8 12.045 17.1 11.345C16.4 10.545 15.6 10.245 14.6 10.245C13.6 10.245 12.8 10.645 12.1 11.345C11.4 12.045 11 12.945 11 13.845C11 14.745 11.4 15.645 12.1 16.345C12.8 17.045 13.6 17.445 14.6 17.445Z"
                    fill="#C86B7B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_341_129">
                    <rect
                      width="29"
                      height="48"
                      fill="white"
                      transform="translate(0 0.344971)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="text-[28px] font-medium mb-4">Web design</h4>
              <p className="font-light mb-4">
                At the Wright Designs we meticulously design your website or
                app, ensuring it aligns perfectly with your vision and brand
                identity.
              </p>
              <p className="font-light mb-4">
                The words “theme” or “template” are taboo in our office.{" "}
                <span className="font-bold">
                  All the work we put forward is, and will always be, built from
                  the ground up and one of a kind.
                </span>
              </p>
              <p className="font-light">
                Not only do{" "}
                <span className="font-bold">
                  we prioritise pixel-perfect design with an eye on your budget
                </span>
                , but we take pride in keeping our clients in the loop at all
                times, allowing you to provide feedback and ensure the final
                product is exactly what you envisioned.
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/design.png"
            alt="Design phase"
            width={800}
            height={450}
            sizes="(max-width: 425px) 90vw, (max-width:800px) 75vw, 50vw"
            className="w-full h-auto rounded-lg drop-shadow-md desktopSmall:-mb-[150px]"
          />
        </li>
        <li className="border-b border-pink/50 pb-10 tablet:grid grid-cols-2 gap-10 desktopSmall:pb-15">
          <div className="flex gap-4 mb-7 desktopSmall:mb-0 tablet:order-last bg-gradient-to-b from-transparent to-beige/80 from-0% to-[3%] desktopSmall:z-10">
            <div className="pr-2 border-r-2 border-blue/25 flex flex-col items-center justify-between">
              <h3 className="font-light text-pink text-center text-[32px] [writing-mode:vertical-rl] rotate-180">
                Phase 2
              </h3>
              <svg
                width="35"
                height="22"
                viewBox="0 0 35 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1667 20.2784L1.5 10.6118L11.2333 0.878418L13.4333 3.01175L5.83333 10.5451L13.3667 18.0784L11.1667 20.2784ZM23.7667 20.3451L21.6333 18.2118L29.1667 10.6784L21.7 3.14508L23.8333 0.945085L33.5 10.6118L23.7667 20.3451Z"
                  fill="#C86B7B"
                  stroke="#C86B7B"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[28px] font-medium mb-4">Web development</h4>
              <p className="font-light mb-4">
                Our development team is skilled in crafting robust and
                cutting-edge solutions. We translate your design vision into a
                functional and user-friendly website or app, maintaining a clean
                and efficient codebase.
              </p>
              <p className="font-bold mb-4">
                We pride ourselves on delivering high-quality projects on time
                and within budget.
              </p>
              <p className="font-light">
                We handle everything from concept to launch, ensuring a smooth
                and stress-free experience, ensuring the way forward is as
                simple and understandable as possible.
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/development.jpg"
            alt="Development phase"
            width={800}
            height={450}
            sizes="(max-width: 425px) 90vw, (max-width:1100px) 85vw, 50vw"
            className="w-full h-auto rounded-lg drop-shadow-md tablet:h-full object-cover aspect-video"
          />
        </li>
        <li className="border-b border-pink/50 pb-10 tablet:grid grid-cols-2 gap-10 desktopSmall:pb-15">
          <div className="flex gap-4 mb-7 desktopSmall:mb-0">
            <div className="pr-2 border-r-2 border-blue/25 flex flex-col items-center justify-between">
              <h3 className="font-light text-pink text-center text-[32px] [writing-mode:vertical-rl] rotate-180">
                Phase 3
              </h3>

              <svg
                width="29"
                height="32"
                viewBox="0 0 29 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 31.3447C22.25 31.3447 21.1875 30.9072 20.3125 30.0322C19.4375 29.1572 19 28.0947 19 26.8447C19 26.6697 19.0125 26.4885 19.0375 26.301C19.0625 26.1135 19.1 25.9447 19.15 25.7947L8.575 19.6447C8.15 20.0197 7.675 20.3135 7.15 20.526C6.625 20.7385 6.075 20.8447 5.5 20.8447C4.25 20.8447 3.1875 20.4072 2.3125 19.5322C1.4375 18.6572 1 17.5947 1 16.3447C1 15.0947 1.4375 14.0322 2.3125 13.1572C3.1875 12.2822 4.25 11.8447 5.5 11.8447C6.075 11.8447 6.625 11.951 7.15 12.1635C7.675 12.376 8.15 12.6697 8.575 13.0447L19.15 6.89473C19.1 6.74473 19.0625 6.57598 19.0375 6.38848C19.0125 6.20098 19 6.01973 19 5.84473C19 4.59473 19.4375 3.53223 20.3125 2.65723C21.1875 1.78223 22.25 1.34473 23.5 1.34473C24.75 1.34473 25.8125 1.78223 26.6875 2.65723C27.5625 3.53223 28 4.59473 28 5.84473C28 7.09473 27.5625 8.15723 26.6875 9.03223C25.8125 9.90723 24.75 10.3447 23.5 10.3447C22.925 10.3447 22.375 10.2385 21.85 10.026C21.325 9.81348 20.85 9.51973 20.425 9.14473L9.85 15.2947C9.9 15.4447 9.9375 15.6135 9.9625 15.801C9.9875 15.9885 10 16.1697 10 16.3447C10 16.5197 9.9875 16.701 9.9625 16.8885C9.9375 17.076 9.9 17.2447 9.85 17.3947L20.425 23.5447C20.85 23.1697 21.325 22.876 21.85 22.6635C22.375 22.451 22.925 22.3447 23.5 22.3447C24.75 22.3447 25.8125 22.7822 26.6875 23.6572C27.5625 24.5322 28 25.5947 28 26.8447C28 28.0947 27.5625 29.1572 26.6875 30.0322C25.8125 30.9072 24.75 31.3447 23.5 31.3447ZM23.5 7.34473C23.925 7.34473 24.2812 7.20098 24.5687 6.91348C24.8562 6.62598 25 6.26973 25 5.84473C25 5.41973 24.8562 5.06348 24.5687 4.77598C24.2812 4.48848 23.925 4.34473 23.5 4.34473C23.075 4.34473 22.7187 4.48848 22.4312 4.77598C22.1437 5.06348 22 5.41973 22 5.84473C22 6.26973 22.1437 6.62598 22.4312 6.91348C22.7187 7.20098 23.075 7.34473 23.5 7.34473ZM5.5 17.8447C5.925 17.8447 6.28125 17.701 6.56875 17.4135C6.85625 17.126 7 16.7697 7 16.3447C7 15.9197 6.85625 15.5635 6.56875 15.276C6.28125 14.9885 5.925 14.8447 5.5 14.8447C5.075 14.8447 4.71875 14.9885 4.43125 15.276C4.14375 15.5635 4 15.9197 4 16.3447C4 16.7697 4.14375 17.126 4.43125 17.4135C4.71875 17.701 5.075 17.8447 5.5 17.8447ZM23.5 28.3447C23.925 28.3447 24.2812 28.201 24.5687 27.9135C24.8562 27.626 25 27.2697 25 26.8447C25 26.4197 24.8562 26.0635 24.5687 25.776C24.2812 25.4885 23.925 25.3447 23.5 25.3447C23.075 25.3447 22.7187 25.4885 22.4312 25.776C22.1437 26.0635 22 26.4197 22 26.8447C22 27.2697 22.1437 27.626 22.4312 27.9135C22.7187 28.201 23.075 28.3447 23.5 28.3447Z"
                  fill="#C86B7B"
                  stroke="#C86B7B"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[28px] font-medium mb-4">Domain & Hosting</h4>
              <p className="font-light mb-4">
                At The Wright Designs, we provide seamless domain and hosting
                solutions that form the foundation of your online presence.
                <span className="font-bold">
                  Our competitively priced hosting packages are designed to
                  accommodate businesses of any size, ensuring you only pay for
                  what you need.
                </span>
              </p>
              <p className="font-light mb-4">
                <span className="font-bold">
                  We believe in keeping hosting simple and reliable{" "}
                </span>
                while delivering exceptional performance for the websites we
                build. From registration to renewal, we handle all aspects of
                your domain management
                <span className="font-bold">
                  , allowing you to focus on your business while we ensure your
                  digital foundation remains rock-solid.
                </span>
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/maintenance.jpg"
            alt="Maintenance phase"
            width={800}
            height={450}
            sizes="(max-width: 425px) 90vw, (max-width:1100px) 85vw, 50vw"
            className="w-full h-auto rounded-lg drop-shadow-md tablet:h-full object-cover aspect-video"
          />
        </li>
        <li className="tablet:grid grid-cols-2 gap-10">
          <div className="flex gap-4 mb-7 desktopSmall:mb-0 tablet:order-last">
            <div className="pr-2 border-r-2 border-blue/25 flex flex-col items-center justify-between">
              <h3 className="font-light text-pink text-center text-[32px] [writing-mode:vertical-rl] rotate-180">
                Phase 4
              </h3>
              <svg
                width="33"
                height="29"
                viewBox="0 0 33 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9334 28.3446L23.5334 25.7446C23.1334 25.6113 22.7334 25.478 22.2668 25.2113C21.8668 25.0113 21.5334 24.7446 21.2001 24.4113L18.9334 24.9446L17.8001 22.9446L19.6668 21.2113C19.6001 21.0113 19.6001 20.7446 19.6001 20.3446C19.6001 19.9446 19.6001 19.678 19.6668 19.5446L17.8001 17.7446L18.9334 15.7446L21.2001 16.278C21.4668 16.0113 21.8001 15.7446 22.2668 15.478C22.6668 15.2113 23.0668 15.078 23.5334 14.9446L23.9334 12.3446H26.4668L26.8668 14.9446C27.2668 15.078 27.6668 15.2113 28.0668 15.478C28.4668 15.7446 28.8668 16.0113 29.1334 16.278L31.3334 15.7446L32.4668 17.7446L30.6001 19.5446C30.6668 19.7446 30.7334 20.0113 30.7334 20.4113C30.7334 20.8113 30.6668 21.078 30.6001 21.278L32.4668 23.0113L31.3334 25.0113L29.2001 24.4113C28.9334 24.678 28.5334 24.9446 28.1334 25.2113C27.7334 25.4113 27.3334 25.6113 26.9334 25.7446L26.5334 28.3446H23.9334ZM0.533447 26.878V22.678C0.533447 21.6113 0.800114 20.678 1.33345 19.878C1.86678 19.078 2.60011 18.478 3.46678 18.078C5.33345 17.278 7.06678 16.678 8.73345 16.278C10.4001 15.878 11.9334 15.7446 13.4001 15.7446H14.6668C13.8668 17.278 13.5334 19.2113 13.6001 21.5446C13.6668 23.878 14.2668 25.678 15.3334 26.878H0.533447ZM25.2668 23.278C26.1334 23.278 26.8668 23.0113 27.4001 22.478C27.9334 21.9446 28.2001 21.2113 28.2001 20.278C28.2001 19.4113 27.9334 18.678 27.4001 18.1446C26.8668 17.6113 26.1334 17.3446 25.2668 17.3446C24.4001 17.3446 23.6668 17.6113 23.1334 18.1446C22.5334 18.7446 22.2668 19.4113 22.2668 20.278C22.2668 21.2113 22.5334 21.878 23.0668 22.478C23.6668 23.0113 24.3334 23.278 25.2668 23.278ZM13.4001 13.4113C11.5334 13.4113 10.0001 12.8113 8.86678 11.6113C7.73345 10.4113 7.06678 8.87796 7.06678 7.07796C7.06678 5.2113 7.66678 3.67796 8.86678 2.47796C10.0668 1.27796 11.6001 0.744629 13.4001 0.744629C15.2001 0.744629 16.8001 1.34463 18.0001 2.54463C19.2001 3.74463 19.8001 5.27796 19.8001 7.14463C19.8001 9.0113 19.2001 10.5446 18.0001 11.678C16.8001 12.8113 15.2668 13.4113 13.4001 13.4113Z"
                  fill="#C86B7B"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[28px] font-medium mb-4">Maintenance</h4>
              <p className="font-light mb-4">
                <span className="font-bold">
                  We go beyond design and development, and understand the
                  importance of maintaining a secure and up-to-date online
                  presence
                </span>
                , and offer ongoing maintenance to ensure your website or app
                functions flawlessly.
              </p>
              <p className="font-light mb-4">
                <span className="font-bold">Technology moves quickly</span>, and
                in order to protect your online investment{" "}
                <span className="font-bold">
                  you need a team that can roll with the punches and keep things
                  running smoothly
                </span>
                . We strongly believe this is what The Wright Designs provides
                for our clients.
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/marketing.jpg"
            alt="Maintenance phase"
            width={800}
            height={450}
            sizes="(max-width: 425px) 90vw, (max-width:1100px) 85vw, 50vw"
            className="w-full h-auto rounded-lg drop-shadow-md tablet:h-full object-cover aspect-video"
          />
        </li>
      </ul>
    </section>
  );
};

export default ServicesComponent;
