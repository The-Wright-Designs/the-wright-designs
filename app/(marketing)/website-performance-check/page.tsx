import AboutComponent from "@/_components/pages/marketing/website-performance-check/about-component";
import ListItemsComponent from "@/_components/pages/marketing/website-performance-check/list-items-component";
import WebsitePerformanceCheckContactForm from "@/_components/ui/forms/website-performance-check-contact-form";
import RecaptchaProvider from "@/_components/recaptcha-provider";

const WebsitePerformanceCheckPage = () => {
  return (
    <div className="relative mt-10 grid gap-10 desktopSmall:grid-cols-[1fr_435px] desktopSmall:my-15">
      <div className="flex flex-col gap-10">
        <AboutComponent />
        <ListItemsComponent />
      </div>
      <RecaptchaProvider>
        <WebsitePerformanceCheckContactForm cssClasses="-mx-5 px-5 py-10 tablet:-mx-10 tablet:px-10 desktopSmall:mx-0 desktopSmall:rounded-lg desktopSmall:px-7 desktopSmall:self-start desktopSmall:sticky desktopSmall:top-40" />
      </RecaptchaProvider>
    </div>
  );
};

export default WebsitePerformanceCheckPage;
