import AboutComponent from "@/_components/website-performance-check/about-component";
import ListItemsComponent from "@/_components/website-performance-check/list-items-component";
import WebsitePerformanceCheckContactForm from "@/_components/forms/website-performace-check-contact-form";
import RecaptchaProvider from "@/_components/recaptcha-provider";

const WebsitePerformanceCheckPage = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <AboutComponent />
      <ListItemsComponent />
      <RecaptchaProvider>
        <WebsitePerformanceCheckContactForm cssClasses="-mx-7 px-7 py-10 tablet:-mx-10 tablet:px-10 desktopSmall:mx-0 desktopSmall:rounded-lg desktopSmall:p-6" />
      </RecaptchaProvider>
    </div>
  );
};

export default WebsitePerformanceCheckPage;
