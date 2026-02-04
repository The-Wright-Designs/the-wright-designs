import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

interface Props {
  cssClasses?: string;
}

const ContactMap = ({ cssClasses }: Props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });
  if (!isLoaded)
    return (
      <div
        className={`border rounded-xl bg-white border-black text-[30px] font-light text-black grid place-items-center py-16 w-full h-full ${cssClasses}`}
      >
        Map loading...
      </div>
    );
  if (loadError)
    return (
      <div
        className={`border rounded-xl bg-white border-black text-[30px] font-light text-black grid place-items-center py-16 w-full h-full ${cssClasses}`}
      >
        Error loading map...
      </div>
    );
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: -34.073712234443335, lng: 23.362552963650543 }}
      mapContainerClassName={`${cssClasses}`}
    >
      <MarkerF
        position={{ lat: -34.073712234443335, lng: 23.362552963650543 }}
      />
    </GoogleMap>
  );
};

export default ContactMap;
