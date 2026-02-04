import OurClientsSlideshow from "@/_lib/our-clients-slideshow";

interface Props {
  cssClasses?: string;
}

const OurClientsComponent = ({ cssClasses }: Props) => {
  return (
    <article className={`my-15 ${cssClasses}`}>
      <h2 className="text-subheading pb-1 border-b-4 border-blue mb-10">
        Our Clients
      </h2>
      <OurClientsSlideshow />
    </article>
  );
};

export default OurClientsComponent;
