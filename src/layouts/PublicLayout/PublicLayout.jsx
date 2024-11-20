import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import logo from "../../assets/images/logo.png";

const PublicLayout = () => {
  const navBar = {
    logo: {
        src: logo,
        href: "/",
        className: "rounded-full",
    },
    navConfig: [
        {
          label: "Features",
          type: "featured dropdown",
          content: [
            {
              icon: logo,
              className: "rounded-full",
              title: "Advice Room",
              href: "/",
              description:
                "Real advice, in real time, with real impact.",
            },
            {
              title: "Advice Room Live",
              href: "/roomlive",
              description:
                "Real-time advice exchanges.",
            },
            {
              title: "QA Live",
              href: "/qalive",
              description:
                "Real time questions, real time answers.",
            },
            {
              title: "Quizzes Live",
              href: "/quizlive",
              description:
                "Real time polls.",
            },
          ],
        },
        {
          label: "Resources",
          type: "dropdown",
          content: [
            {
              title: "Tutorial",
              href: "/tutorial",
              description:
                "Find out more about the product, how it might benefit you, and how to use it.",
            },
            {
              title: "FAQ",
              href: "/faq",
              description:
                "A collection of frequently asked questions.",
            },
            {
              title: "About Us",
              href: "/docs/primitives/alert-dialog",
              description:
                "Learn more about the Advice Room and the team behind it.",
            },
            {
              title: "Contact US",
              href: "/docs/primitives/alert-dialog",
              description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
          ],
        },
        {
          label: "Pricing",
          type: "link",
          href: "/pricing",
        },
        {
            label: "Blog",
            type: "link",
            href: "/blog",
        },
    ],
    buttons: {
        actionOne: {
            href: "",
            text: "Log in",
        },
        actionTwo: {
            href: "/register",
            text: "Sign up",
        }
    }
    
  };

  return (
    <>
      <Header navBar={navBar} />

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default PublicLayout;
