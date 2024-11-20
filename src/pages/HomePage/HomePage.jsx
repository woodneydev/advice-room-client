import Hero from "../../components/Hero/Hero";
import { PlayIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  const heroConfig = {
    subHeader: {
      label: "Product Tour",
      text: "Watch Video",
      href: "/",
      icon: (
        <PlayIcon aria-hidden="true" className="-mr-2 size-4 text-gray-400" />
      ),
    },
    header: "Welcome to the Advice Room",
    tagline:
      "Welcome to Advice Room: Join live rooms to give or get real-time advice that truly makes an impact. Real people. Real advice. Real impact.",
    buttons: {
      actionOne: {
        href: "",
        text: "Get started free!",
      },
      actionTwo: {
        href: "",
        text: "Learn more",
      },
    },
    backgroundImage: "",
  };

  return (
    <>
      <Hero heroConfig={heroConfig} />
    </>
  );
};

export default HomePage;
